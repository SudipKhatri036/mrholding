import "./CompanyProfile.css";

function CompanyProfile() {
  return (
    <section className="company-profile" id="profile">
      <h2>
        Company Profile <span>corporate profile</span>
      </h2>
      <dl className="company-profile__details-cont">
        <div className="flex">
          <dt>Company name</dt>
          <dd>Japan AI Co.,Ltd.</dd>
        </div>
        <div className="flex">
          <dt>Business purpose</dt>
          <dd>
            Research and development of artificial intelligence, consulting
            services related to artifical intelligence
          </dd>
        </div>
        <div className="flex">
          <dt>location</dt>
          <dd>
            5th/6th floor, Sumitomo Real Estate Shinjuku Oak Tower, 6-8-1
            Nishi-Shinjuku, Sinjuku-ku, Tokyo 163-6006
          </dd>
        </div>
        <div className="flex">
          <dt>Capital</dt>
          <dd>40 million yen</dd>
        </div>
        <div className="flex">
          <dt>Capital</dt>
          <dd>40 million yen</dd>
        </div>
        <div className="flex">
          <dt>Established Date</dt>
          <dd>April 14,2023</dd>
        </div>
        <div className="flex">
          <dt>Capital</dt>
          <dd>40 million yen</dd>
        </div>
        <div className="flex">
          <dt>Established Date</dt>
          <dd>April 14,2023</dd>
        </div>
        <div className="flex">
          <dt>location</dt>
          <dd>
            5th/6th floor, Sumitomo Real Estate Shinjuku Oak Tower, 6-8-1
            Nishi-Shinjuku, Sinjuku-ku, Tokyo 163-6006
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default CompanyProfile;
