import Image from 'next/image';

const project2 = () => {
    return (
        <>
        <div style={{ maxWidth: "50vw", "textAlign": "justify" }}>
            <Image src="/Ticket.jpg" alt="Image file" height={350} width={500} />
            <h1>Webinar | Dangers of Log4J</h1>
            <hr></hr>
            <p>
                I attended this webinar as I wanted to learn more about the recent Log4J vulnerability.
            </p>
            <br></br>
            <p>
                While it gave me deeper insight on the attack, I felt that I learnt beyond the session as well.
            </p>
            <br></br>
            <p>
                It gave me a better understanding of 0-day attacks, and how malicious actors may prey on these vulnerabilites to conduct massive attacks
            </p>
        </div>
        
        </>
    );
};

export default project2;