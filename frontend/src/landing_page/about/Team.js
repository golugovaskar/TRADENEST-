import React, { useState } from "react";

function Team() {
  const [openIndex, setOpenIndex] = useState(null);

  const teamMembers = [
    {
      name: "Sunil Sagar",
      role: "Co-founder & CFO",
      img: "media/images/sunil.jpg",
      about:
        "Sunil Sagar is responsible for the financial planning and regulatory compliance at Tradenest. He brings over 15 years of experience in financial strategy.",
    },
    {
      name: "Manish Sharma",
      role: "CTO",
      img: "media/images/manish.jpg",
      about:
        "Manish leads our technology initiatives and has a passion for building scalable fintech platforms that serve millions.",
    },
    {
      name: "Gautam OAS",
      role: "COO",
      img: "media/images/gautam.jpg",
      about:
        "Gautam oversees operations and ensures the smooth functioning of all departments with an emphasis on process efficiency.",
    },
    {
      name: "Vikash Keshari",
      role: "VP, Education",
      img: "media/images/vikas.jpg",
      about:
        "Vikash is focused on investor education and financial literacy programs, helping users become smarter investors.",
    },
    {
      name: "Sanjeev Ranjan",
      role: "Compliance Head",
      img: "media/images/sanjeev.jpg",
      about:
        "Sanjeev ensures that Tradenest stays fully compliant with all regulatory and statutory requirements.",
    },
    {
      name: "Ravi Sharma",
      role: "VP, Finance",
      img: "media/images/ravikumar.jpg",
      about:
        "Ravi manages internal financial operations and works closely with stakeholders to align financial goals.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="row px-3 mt-5 border-top">
        <h1 className="text-center mt-4">People</h1>
      </div>

      {/* Founder Section */}
      <div className="row px-3 py-4 text-muted" style={{ lineHeight: "1.8" }}>
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/maingolu.png"
            style={{
              width: "90%",
              maxWidth: "200px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            alt="Profile"
          />
          <h4 className="mt-4">Golu Govaskar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Founder, CEO Golu Govaskar founded TRADENEST in 2010 to overcome
            hurdles faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing Cricket is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://www.instagram.com/golugovaskar_45/?hl=en"
              className="text-decoration-none"
            >
              Instagram
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>

      <div className="text-center p-3"><h4>All Team members</h4></div>

      {/* Team Members Grid */}
      <div className="row text-center mt-5 text-muted">
        {teamMembers.slice(0, 3).map((member, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx}>
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "130px",
                height: "130px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <h5 className="mt-3 text-muted">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
            <button
              className="btn btn-sm btn-outline-dark text-muted"
              onClick={() => toggleDropdown(idx)}
            >
              {openIndex === idx ? "Hide About" : "More About"}
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-secondary px-2" style={{ fontSize: "0.9em" }}>
                {member.about}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="row text-center text-muted">
        {teamMembers.slice(3).map((member, idx) => (
          <div className="col-12 col-md-4 mb-4" key={idx + 3}>
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <h5 className="mt-3">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
            <button
              className="btn btn-sm btn-outline-dark text-muted"
              onClick={() => toggleDropdown(idx + 3)}
            >
              {openIndex === idx + 3 ? "Hide About" : "More About"}
            </button>
            {openIndex === idx + 3 && (
              <p className="mt-2 text-secondary px-2" style={{ fontSize: "0.9em" }}>
                {member.about}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
