import useWebAnimations, { fadeInRight, slideInRight, zoomIn } from "@wellyshen/use-web-animations";


export const CardAnimation =()=>{


    const {ref} = useWebAnimations({slideInRight});

    const anim = ref;

    return {anim};
};



export const HomeImg = () => {



    const { ref } = useWebAnimations({ ...fadeInRight });

    const homeImg = ref;


    return { homeImg };


};

export const HomeText = () => {



    const { ref } = useWebAnimations({ ...zoomIn });

    const homeText = ref;


    return { homeText };


};

