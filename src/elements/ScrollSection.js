const ScrollSection = (props) => 
<section className={props.className} id={props.name}>
    {props.children}
</section>

export default ScrollSection;