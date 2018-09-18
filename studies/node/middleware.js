
//Understanding middleware pattern used in ExpressJS


/*      First, we create insolated functions, 
    which receive a context and a callback 
    method to be invoked after its execution*/


const mid1 = (ctx, next) => {
    ctx.midValue1 = 'Context 1'
    next()
}

const mid2 = (ctx, next) => {
    ctx.midValue2 = 'Context 2'
    next()
}

const mid3 = ctx => ctx.midValue3 = 'Context 3'; //Having a callback is not a rule


/*
    Then, we create a function to iterate through our functions.
    As we are using the spread parameter (...), we will be able 
    to pass as much functions as parameters as we need
*/


const exec = (ctx, ...middlewares) => {
    const execMid = index => {
        middlewares && index < middlewares.length &&
            middlewares[index](ctx, () => execMid(++index))
    }
    execMid(0)
}

const ctx = {}
exec(ctx, mid1, mid2, mid3) 
console.log(ctx)

/*  we can call "exec" multiple times, passing every "mid"
 as parameters or simply one, changing its order as we please.
 But since mid3 does not have a callback, every mids we pass after
 It won't be invoked, of course.*/