export const pageAnimation = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    show:{
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
            opacity: 0,
            x: 300,
            transition: {
                duration: 0.5,
            }
    },
};

export const titleAnimation = {
    hidden: {
        x:  -500,
    },
    show: {
        x: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.5
        }
    }
}

export const imageAnimation = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.5,
        }
    }
}