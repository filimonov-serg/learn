export default function Guards(guards) {
    return async (to, from, next) => {
        let bChanged = false;

        const mNext = function(value) {
            if(bChanged) return;
            if(typeof value != 'undefined') {
                bChanged = true;
                next(value);
            }
        };

        for (let i=0; i<guards.length; i++) {
            if(bChanged) break;
            await guards[i](to, from, mNext);
        }

        if(!bChanged) next();
    }
}