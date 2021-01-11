export const pageAnimation = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    show:{
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
            opacity: 0,
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
export const titleAnim = {
    hidden: {
        x:  -700,
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

export const lineAnimation = {
    hidden: {
        width: '0%',
    },
    show: {
        width: '100%',
        transition: {
            duration: 1,
        }
    }

}

export const Slider = {
    hidden: {
        x: '-130%',
        skew: '45deg',
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            duration: 1,
        }
    }


}

export const sliderContainer ={
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.15,
            ease: 'easeOut',
        }
    }
}

export const scrollReveal = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        transition:{
            duration: 0.4
        },
    },
    show:{
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    }
}