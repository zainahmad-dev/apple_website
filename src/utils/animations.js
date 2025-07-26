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