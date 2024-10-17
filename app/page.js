import Head from 'next/head';
import styles from '../styles/globals.css';
import Image from 'next/image';



export default function Home() {
    return (
        <>
            <Head>
                <title>Halo, artefact des Forenners</title>
                <link rel='stylesheet' href="../styles/globals.css" />
            </Head>
            <body>
                <header>
                    <nav>
                    <a href="#unsc">Unions des Nations planétaires</a>
                    <a href="#covenant">Harvest, premier conflit</a>
                    <a href="#reach">Terre des Spartans</a>
                    <a href="#spartan">Projet Mjlonir</a>
                    <a href="#planetes">Planètes</a>
                    </nav>
                </header>

                <main>
                    <h1 id="unsc">Unions des Nations planétaires</h1>
                    <div className="unsc">
                    <p>
                        <q>L'Union des pays aux seins d'un organisme planétaire</q> s'est faite afin de découvrir d'autres systèmes habitables pour l'homme...
                    </p>
                    </div>

                    <h2><strong>Personnages dans Halo:</strong></h2>
                    <div className="personnages">
                        <ol>
                            <div className="major">
                                <img src="/image/halo-image/major.png" alt="Major" width={200} height={200} className="flottante" />
                                <li>Major: John-117</li>
                            </div>

                            <div className="cortana">
                                <img src="/image/halo-image/cortana.png" alt="Cortana" width={200} height={200} className="flottante2" />
                                <li>Cortana: intelligence artificielle accompagnant le major</li>
                            </div>

                            <div className="keyes">
                                <img src="/image/halo-image/keyes.png" alt="Capitaine" width={200} height={200} className="flottante3" />
                                <li>Capitaine Keyes: Jacob Keyes, capitaine du Pillar-of-autumn</li>
                            </div>

                            <div className="johnson">
                                <img src="/image4/halo-image/johnson.png" alt="sergent Jonhson" width={200} height={200} className="flottante4" />
                                <li>Sergent Johnson: soldat du pillar</li>
                            </div>

                            <div className="commandant">
                                <img src="/image/halo-image/commandant_keyes.png" alt="Miranda" width={200} height={200}  className="flottante5" />
                                <li>Commandant Miranda Keyes: fille du capitaine Keyes</li>
                            </div>

                            <div className="arbiter">
                                <img src="/image/halo-image/arbiter.png" alt="Tel Vanalee" width={200} height={200} className="flottante6" />
                                <li>Arbiter: Commandant de la flotte Covenant</li>
                            </div>
                        </ol>
                    </div>

                    <h1 id="planetes">Les planètes</h1>
                        <div className="planetes">
                            <ol>
                                <div className="harvest">
                                    <img src="/image/halo-image/harvest.png" className="harv" />
                                        <li>Harvest: premier conflit majeur entre humains et Covenant.</li>
                                </div>
                                        <li>Reach</li>
                                        <li>Terre</li>
                                        <li>Sanghelios</li>
                            </ol>
                        </div>
                </main>
            </body>
        </>
    )
}