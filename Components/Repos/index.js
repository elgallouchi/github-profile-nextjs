import React, { useState } from "react";
import st from "../../styles/Repos.module.css";

export default function Repos({
  repos,
  reposHasPage,
  reposWithLinkDemo,
  reposWithDiscription,
  reposFiltred,
  profileUser,
}) {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className={st.repos}>
      {/* <h2>Repositories </h2> */}
      <div className={st.tabs}>
        {/* avatar tab */}
        <div className={st.profile}>
          <img src={profileUser?.avatar_url} alt={profileUser?.login} />
          <h1>{profileUser?.login}</h1>
        </div>
        {/* avatar tab */}
        <div className={`${st.tab} ${openTab === 1 ? st.activeTab : null}`}>
          <p onClick={(e) => setOpenTab(1)}>
            all{" "}
            <span>
              {repos.length === 30 ? repos.length + " *" : repos.length}
            </span>
          </p>
        </div>
        <div className={`${st.tab} ${openTab === 2 ? st.activeTab : null}`}>
          <p
            onClick={(e) => setOpenTab(2)}
            title="Repositories with github pages"
          >
            page{" "}
            <span>
              {reposHasPage.length === 30
                ? reposHasPage.length + " *"
                : reposHasPage.length}
            </span>
          </p>
        </div>
        <div className={`${st.tab} ${openTab === 3 ? st.activeTab : null}`}>
          <p
            onClick={(e) => setOpenTab(3)}
            title="Repositories with link website"
          >
            Demo{" "}
            <span>
              {reposWithLinkDemo.length === 30
                ? reposWithLinkDemo.length + " *"
                : reposWithLinkDemo.length}
            </span>
          </p>
        </div>
        <div className={`${st.tab} ${openTab === 4 ? st.activeTab : null}`}>
          <p
            onClick={(e) => setOpenTab(4)}
            title="Repositories with description"
          >
            description{" "}
            <span>
              {reposWithDiscription.length === 30
                ? reposWithDiscription.length + " *"
                : reposWithDiscription.length}
            </span>
          </p>
        </div>
      </div>
      <div className={st.items}>
        {openTab === 1 && reposFiltred(repos)}
        {openTab === 2 && reposFiltred(reposHasPage)}
        {openTab === 3 && reposFiltred(reposWithLinkDemo)}
        {openTab === 4 && reposFiltred(reposWithDiscription)}
      </div>
    </div>
  );
}
