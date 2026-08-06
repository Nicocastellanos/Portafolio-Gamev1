
export default function AboutBox({ hability }: { hability: { title: string; image?: string } }) {
    return (
        <div className="about-box">
            <button>
                <div>
                    <h1>{hability.title}</h1>
                    <div>
                        <img src={hability.image} alt={hability.title} />
                        <img src={hability.image} alt={hability.title} />
                    </div>
                </div>
            </button>
        </div>
    );
}
