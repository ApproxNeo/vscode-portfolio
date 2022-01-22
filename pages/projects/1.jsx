import Image from 'next/image';



const project1 = () => {
    return (
        <>
        <div style={{ maxWidth: "50vw", "textAlign": "justify" }}>
            <Image src="/Yongen.png" alt="Image file" height={350} width={500} />
            <h1>Service Learning @ Yong-En care center</h1>
            <hr></hr>
            <p>
                On the 25th of November, 2021, my classmates and I 
                held a 3 hour workshop on the popular graphic design 
                tool Canva. Our audience were the folks at Yong-En 
                care center.
            </p>
            <br></br>
            <p>
                This workshop was held over Zoom. Due to a sudden 
                lecture my class had, we had to stay in school to 
                hold the workshop. Luckily, we improvised fast and 
                managed to proceed as planned. 
            </p>
            <br></br>
            <p>
                In the Zoom call were some volunteers from Yong-En 
                who helped to manage the folks, the folks themselves, 
                my entire class and our mentor. For my part, I engaged 
                with the folks at the beginning to get everyone hyped 
                for the session, then gave an introduction to what 
                they could expect to learn from attending our workshop,
                and also answered certain questions they had. 
            </p>
            <br></br>
            <p>
                I also managed to assist the folks with some 1 to 1 help;
                by guiding them through the myriad of features on Canva, 
                as well as answering as questions they had.
            </p>
        </div>
        
        </>
    );
};

export default project1;