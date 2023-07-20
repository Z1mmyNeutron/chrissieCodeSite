let contents = [
    "Here are some of my projects:"
]

export default function FirmOverview() {
    return  <>
    <h5 style={{ fontFamily: "Spectral-Regular", textAlign: "left", fontWeight: "bold", paddingLeft:"10%" }}>Firm Overview</h5>
    <p style={{ fontFamily: "Spectral-Regular", textAlign: "left", lineHeight: 2, paddingLeft: "10%" }}>{contents.map(c => <><p style={{ paddingTop: 5 }}>{c}</p></>)}</p>
    <iframe id="my_youtube" width="560" height="315" src="https://youtu.be/p_UFfmKaesQ" title="Tech Deck Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </>
}