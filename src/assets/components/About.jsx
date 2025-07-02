import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const About = () => {
  const containerId = "aboutContentSection";
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="pageContentSection" id={containerId}>
      <h2>À propos</h2>
      <div className="content" id="aboutContentContainer">
        <div className="contentSection" id="contentDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quisquam facilis, quidem ut sunt dolor? Vel nihil, eius modi omnis
            commodi natus quae harum delectus inventore ipsam, quo eum
            accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Odit nisi quis natus alias! Rerum autem modi voluptas est
            aliquam necessitatibus consequuntur, excepturi nisi ab sapiente.
            Nisi aperiam id libero tempora. Corrupti a laborum dicta possimus? A
            sit optio consectetur rem nulla ullam, quod et repellat iure. Nam
            sint, aut laboriosam possimus, quisquam expedita sequi aliquid
            obcaecati quis, maxime explicabo ex.
          </p>
          {isMobile && !seeMore ? null : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium laboriosam aspernatur illum repudiandae dignissimos
              numquam deleniti, error beatae. Reprehenderit itaque impedit
              provident deleniti magni assumenda totam, facilis sunt corporis
              id. Quasi modi eligendi tempore dignissimos libero voluptatem
              corrupti quam harum veniam expedita cum perferendis, quibusdam ab
              temporibus quis consequuntur minima! Perferendis rerum repudiandae
              blanditiis corporis nam? Natus praesentium doloremque quod! Ut
              fugit quo voluptatem quibusdam pariatur placeat, facilis hic
              suscipit ex est numquam odio corrupti repudiandae deserunt
              exercitationem aut eum porro, inventore expedita maiores amet?
              Voluptas cumque quo nam ex!
            </p>
          )}
          {isMobile ? (
            <button onClick={() => setSeeMore(!seeMore)} id="seeMoreButton">
              {seeMore ? "Fermer" : "Voir plus"}
            </button>
          ) : null}
        </div>
        <div className="contentSection" id="heroContentSection">
          <div id="heroImgContainer">
            <img
              src="public/images/iconemap.png"
              alt="Photo de Lucas Jouffroy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
