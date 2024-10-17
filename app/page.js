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
                            <li className="major">
                                <Image src="/image/halo-image/major.png" alt="Major" width={200} height={200} className="flottante" />
                                Major: John-117
                            </li>

                            <li className="cortana">
                                <Image src="/image/halo-image/cortana.png" alt="Cortana" width={200} height={200} className="flottante2" />
                                Cortana: intelligence artificielle accompagnant le major
                            </li>

                            <li className="keyes">
                                <Image src="/image/halo-image/keyes.png" alt="Capitaine" width={200} height={200} className="flottante3" />
                                Capitaine Keyes: Jacob Keyes, capitaine du Pillar-of-autumn
                            </li>

                            <li className="johnson">
                                <Image src="/image/halo-image/johnson.png" alt="Sergent Jonhson" width={200} height={200} className="flottante4" />
                                Sergent Johnson: soldat du pillar
                            </li>

                            <li className="commandant">
                                <Image src="/image/halo-image/commandant_keyes.png" alt="Miranda" width={200} height={200} className="flottante5" />
                                Commandant Miranda Keyes: fille du capitaine Keyes
                            </li>

                            <li className="arbiter">
                                <Image src="/image/halo-image/arbiter.png" alt="Tel Vanalee" width={200} height={200} className="flottante6" />
                                Arbiter: Commandant de la flotte Covenant
                            </li>
                        </ol>
                    </div>

                    <h1 id="planetes">Les planètes</h1>
                    <div className="planetes">
                        <ol>
                            <li className="harvest">
                                <Image src="/image/halo-image/harvest.png" alt="Harvest" width={200} height={200} className="harv" />
                                Harvest: premier conflit majeur entre humains et Covenant.
                            </li>
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