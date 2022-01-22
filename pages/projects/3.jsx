import Image from 'next/image';

const project3 = () => {
    return (
        <>
        <div style={{ maxWidth: "50vw", "textAlign": "justify" }}>
            <Image src="/Forensics.jpg" alt="Image file" height={350} width={500} />
            <h1>Webinar | Digital Forensics: Hardware</h1>
            <hr></hr>
            <p>
                I attended this webinar as I wanted go deeper in forensics other than what is taught in my modules
            </p>
            <br></br>
            <p>
                It helped me get a better understanding of the procedures as they conducted a live forensics case where a system was set up
                and they went through each step of evidence aquisition, and thereafter forensics.
            </p>
            <br></br>
            <p>
                It was eye-opening as I managed to see the concepts taught in my modules go into play, as well as managed to attempt forensics on a provided image file.
            </p>
        </div>
        
        </>
    );
};

export default project3;