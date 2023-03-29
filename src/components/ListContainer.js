import React, { useEffect, useState } from "react";
import { useHackthon } from "../context/HackathonContext";
import Card from "./Card";
function ListContainer() {
  const { hackthonList } = useHackthon();
  const [showList, setShowList] = useState([]);
  const [typeShow, setTypeShow] = useState("all");
  const [sort, setSort] = useState("Sort");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setShowList(hackthonList);
  }, [hackthonList]);
  useEffect(() => {
    if (typeShow === "fav") {
      setShowList(hackthonList.filter((item) => item.favourite));
    } else {
      setShowList(hackthonList);
    }

    if (search) {
      setShowList(
        hackthonList.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [typeShow, search]);

  const ListSortByDate = () => {
    if (typeShow === "all") {
      if (sort === "Newest") {
        setShowList((hac) => {
          return hackthonList.sort((a, b) => {
            return new Date(a.saved_date) - new Date(b.saved_date);
          });
        });
      } else {
        setShowList((hac) => {
          return hackthonList.sort((a, b) => {
            return new Date(b.saved_date) - new Date(a.saved_date);
          });
        });
      }
    }else{
      if (sort === "Newest") {
        setShowList((hac) => {
          return hac.sort((a, b) => {
            return new Date(a.saved_date) - new Date(b.saved_date);
          });
        });
      } else {
        setShowList((hac) => {
          return hac.sort((a, b) => {
            return new Date(b.saved_date) - new Date(a.saved_date);
          });
        });
      }
    }
  };

  return (
    <div>
      <div className="list-container">
        <div className="list-container__header">
          <div className="list-container__header__left">
            <div className="list-container__header__left__type">
              <button
                className={typeShow === "all" ? "active_list" : ""}
                onClick={() => setTypeShow("all")}
              >
                All Submissions
              </button>
              <button
                className={typeShow === "fav" ? "active_list" : ""}
                onClick={() => setTypeShow("fav")}
              >
                Favourite Submissions{" "}
              </button>
            </div>
          </div>
          <div className="list-container__header__right">
            <div className="search-container">
              <form className="submit">
                <input
                  className="submit"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>

            <div className="list-container__header__right__sort">
              <button
                className="sort_button"
                onClick={() => setVisible(!visible)}
              >
                {sort + "   "} &#9660;
              </button>
              {visible && (
                <div className="sort_menu">
                  <span
                    className="sort_menu_item"
                    onClick={() => {
                      setSort("Newest");
                      ListSortByDate();
                      setVisible(false);
                    }}
                  >
                    Newest
                  </span>
                  <span
                    className="sort_menu_item"
                    onClick={() => {
                      setSort("Oldest");
                      ListSortByDate();
                      setVisible(false);
                    }}
                  >
                    Oldest
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="list-container__body">
          {showList.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListContainer;
