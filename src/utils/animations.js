import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
export const animateWithGsap = (target, animationProps,scrollprops)=>{
   gsap.to(target,{
    ...animationProps,
    scrollTrigger:{
        trigger:target,
        toggleActions:'restart reverse restart reverse',
        start:'top 85%',
        ...scrollprops,

    }
   }) 
}





export const animateWithGsapTimeline = (timeline,rotationRef, rotationState,firstTarget,SecondTarget,animationProps) =>{
    timeline.to(rotationRef.current.rotation,{
        y: rotationState,
        duration:2,
        ease:'power2.inOut'
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )
    timeline.to(
        SecondTarget,{
            ...animationProps,
            ease:'power2.inOut'
        }
    )

}