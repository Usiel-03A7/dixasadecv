import style from "./moreProjects.module.css"
export default function MoreProjects() {
    return (
        <div className={style.containerMoreProjects}>
            <span>
                <h2>Más proyectos</h2>
            </span>

            <span className={style.containerProjects}>

                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest1.jpg" alt="proyecto" />
                    <h2>Proyecto el que no se</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias minus libero, nam laboriosam
                        recusandae magni ut aliquid! Consectetur excepturi sunt consequuntur mollitia esse sed quae consequatur omnis inventore eum?</p>
                </span>
                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest2.jpg" alt="proyecto" />
                    <h2>Proyecto no se nombre</h2>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ad consectetur veritatis,
                        esse culpa reprehenderit beatae perferendis, molestiae adipisci, ipsum dolor explicabo minus harum velit deleniti cumque.
                        Rerum, accusamus corrupti?</p>
                </span>
                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest3.jpg" alt="proyecto" />
                    <h2> Proyecto no me se el nombre</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia et obcaecati ducimus labore, pariatur sit,
                        cum nesciunt illo tempora nostrum quis esse, fugiat doloremque officia nisi eligendi maxime harum.</p>
                </span>
                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest4.jpg" alt="proyecto" />
                    <h2> Proyecto que tampoco me se el nombre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga, dolore ipsam iure veritatis incidunt repudiandae,
                        praesentium accusamus maiores explicabo fugit aut quibusdam optio unde dolorem. Eos similique neque sit.</p>
                </span>
                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest5.jpg" alt="proyecto" />
                    <h2> Proyecto que tampoco me se el nombre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga, dolore ipsam iure veritatis incidunt repudiandae,
                        praesentium accusamus maiores explicabo fugit aut quibusdam optio unde dolorem. Eos similique neque sit.</p>
                </span>
                <span className={style.containerProjectsChildren}>
                    <img src="./ProyectoTest6.jpg" alt="proyecto" />
                    <h2> Proyecto que tampoco me se el nombre</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga, dolore ipsam iure veritatis incidunt repudiandae,
                        praesentium accusamus maiores explicabo fugit aut quibusdam optio unde dolorem. Eos similique neque sit.</p>
                </span>

            </span>
        </div>
    )
}