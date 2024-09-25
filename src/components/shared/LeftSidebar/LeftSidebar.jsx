

const LeftSidebar = () => {

  return (
    <div className="col-left col-left-login" id="sidebar">
      <div className="sub_path over-wrap">
        <ul className="list-unstyled components">
          <p>
            Popular
            <i className="fa fa-close pt-1 icon-toggle-right mobile-menu float-right" />
          </p>
          <li className="tab-show">
            <a aria-expanded="false">
              <span className="sports-icon homeside" /> Home
            </a>
          </li>
          <li>
            <a aria-expanded="false">
              <span className="sports-icon inplayside" /> In-Play
            </a>
          </li>
          <li>
            <a
              data-toggle="collapse"
              className="dropdown-toggle"
              style={{ textTransform: "capitalize" }}
            >
              <span className="sports-icon cricketside" /> Cricket
            </a>
            <div id="cricketSubmenu" style={{ display: "none" }}>
              <div id="sidetree">
                <ul id="tree">
                  <li style={{ marginLeft: "15px" }}>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          South Africa T20 Challenge
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="DP World Lions v Titans"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              DP World Lions v Titans
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          ></div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Western Province v Boland Rocks"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Western Province v Boland Rocks
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Knights v North West Dragons"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Knights v North West Dragons
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Warriors v Dolphins"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Warriors v Dolphins
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Test Matches
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="India v Bangladesh"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                India v Bangladesh
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Sri Lanka v New Zealand"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Sri Lanka v New Zealand
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Caribbean Premier League
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Guyana Amazon Warriors v Barbados Royals"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Guyana Amazon Warriors v Barbados Royals
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            County Championship
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Durham v Kent"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Durham v Kent
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Essex v Surrey"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Essex v Surrey
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed  rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Nottinghamshire v Warwickshire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Nottinghamshire v Warwickshire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Somerset v Hampshire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Somerset v Hampshire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Worcestershire v Lancashire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Worcestershire v Lancashire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Sussex v Middlesex"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Sussex v Middlesex
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Yorkshire v Northamptonshire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Yorkshire v Northamptonshire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Glamorgan v Gloucestershire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Glamorgan v Gloucestershire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Leicestershire v Derbyshire"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Leicestershire v Derbyshire
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Australia NCL Women
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Queensland Fire v New South Wales Breakers"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Queensland Fire v New South Wales Breakers
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="South Australian Scorpions v ACT Meteors"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                South Australian Scorpions v ACT Meteors
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Marsh One-Day Cup
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Tasmania v Queensland"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Tasmania v Queensland
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Legends League Cricket
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="India Capitals v Southern Super Stars"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                India Capitals v Southern Super Stars
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Konark Suryas Odisha v Manipal Tigers"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Konark Suryas Odisha v Manipal Tigers
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Zim Afro T10
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Harare Bolts v Nys Lagos"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Harare Bolts v Nys Lagos
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Durban Wolves v Cape Town Samp Army"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Durban Wolves v Cape Town Samp Army
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Joburg Bangla Tigers v Bulawayo Brave Jaguars"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Joburg Bangla Tigers v Bulawayo Brave Jaguars
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            ICC Cricket World Cup League 2
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Canada v Oman"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Canada v Oman
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="treeview"
                        style={{
                          position: "relative",
                          padding: "4px 0px 0px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          verticalAlign: "middle",
                        }}
                      >
                        <svg
                          className="toggle"
                          viewBox="64 -65 897 897"
                          style={{
                            width: "1em",
                            height: "1em",
                            marginRight: "10px",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            opacity: 1,
                          }}
                        >
                          <g>
                            <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                          </g>
                        </svg>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontFamily: "monospace",
                            fontSize: "0.6em",
                            verticalAlign: "middle",
                            marginRight: "0px",
                          }}
                        />
                        <span style={{ verticalAlign: "middle" }}>
                          <span
                            className="treeviewnode"
                            style={{
                              fontSize: "11px",
                              color: "rgb(0, 0, 0)",
                              cursor: "pointer",
                            }}
                          >
                            Pakistan Champions One Day Cup
                          </span>
                        </span>
                        <div
                          style={{
                            height: "0px",
                            opacity: 0,
                            transform: "translate3d(20px, 0px, 0px)",
                            willChange: "transform, opacity, height",
                            marginLeft: "6px",
                            padding: "4px 0px 0px 14px",
                            borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                          }}
                        >
                          <div
                            className="treeview"
                            style={{
                              position: "relative",
                              padding: "4px 0px 0px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              verticalAlign: "middle",
                            }}
                          >
                            <svg
                              className="toggle"
                              viewBox="64 -65 897 897"
                              style={{
                                width: "1em",
                                height: "1em",
                                marginRight: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                opacity: "0.3",
                              }}
                            >
                              <g>
                                <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                              </g>
                            </svg>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                                fontSize: "0.6em",
                                verticalAlign: "middle",
                                marginRight: "0px",
                              }}
                            />
                            <span style={{ verticalAlign: "middle" }}>
                              <span
                                className="treeviewnode"
                                title="Stallions v Lions"
                                style={{
                                  color: "rgb(0, 0, 0)",
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Stallions v Lions
                              </span>
                            </span>
                            <div
                              style={{
                                height: "0px",
                                opacity: 0,
                                transform: "translate3d(20px, 0px, 0px)",
                                willChange: "transform, opacity, height",
                                marginLeft: "6px",
                                padding: "4px 0px 0px 14px",
                                borderLeft:
                                  "1px dashed rgba(255, 255, 255, 0.4)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              data-toggle="collapse"
              className="dropdown-toggle"
              style={{ textTransform: "capitalize" }}
            >
              <span className="sports-icon soccerside" /> Soccer
            </a>
            <div id="cricketSubmenu" style={{ display: "none" }}>
              <div id="sidetree">
                <ul id="tree">
                  <li style={{ marginLeft: "15px" }}>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Brazilian Serie A
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bragantino SP v Internacional"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bragantino SP v Internacional
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Gremio v Criciuma"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Gremio v Criciuma
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Spanish La Liga
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Girona v Rayo Vallecano"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Girona v Rayo Vallecano
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Barcelona v Getafe"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Barcelona v Getafe
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Swedish Allsvenskan
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Sirius v AIK"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Sirius v AIK
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Mjallby v Varnamo"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Mjallby v Varnamo
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Djurgardens v Brommapojkarna"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Djurgardens v Brommapojkarna
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          UEFA Europa League
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Az Alkmaar v Elfsborg"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Az Alkmaar v Elfsborg
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Midtjylland v Hoffenheim"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Midtjylland v Hoffenheim
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Ludogorets v Slavia Prague"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Ludogorets v Slavia Prague
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bodo Glimt v Porto"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bodo Glimt v Porto
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Nice v Real Sociedad"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Nice v Real Sociedad
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Man Utd v FC Twente"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Man Utd v FC Twente
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Anderlecht v Ferencvaros"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Anderlecht v Ferencvaros
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Dynamo Kiev v Lazio"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Dynamo Kiev v Lazio
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Galatasaray v PAOK"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Galatasaray v PAOK
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          English Football League Cup
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Liverpool v West Ham"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Liverpool v West Ham
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Arsenal v Bolton"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Arsenal v Bolton
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Danish Series
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Gørslev IF v Skjold"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Gørslev IF v Skjold
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Japanese Emperor Cup
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Kashima v Kobe"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Kashima v Kobe
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Yokohama FM v Renofa Yamaguchi"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Yokohama FM v Renofa Yamaguchi
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          CONMEBOL Copa Libertadores
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Atletico MG v Fluminense"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Atletico MG v Fluminense
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Italian Cup
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Genoa v Sampdoria"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Genoa v Sampdoria
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Udinese v Salernitana"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Udinese v Salernitana
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Pisa v Cesena"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Pisa v Cesena
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              data-toggle="collapse"
              className="dropdown-toggle"
              style={{ textTransform: "capitalize" }}
            >
              <span className="sports-icon tennisside" /> Tennis
            </a>
            <div id="cricketSubmenu" style={{ display: "none" }}>
              <div id="sidetree">
                <ul id="tree">
                  <li style={{ marginLeft: "15px" }}>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          Lisbon Challenger 2024
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="He Rocha v Th Seyboth Wild"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              He Rocha v Th Seyboth Wild
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Em Nava v Gaubas"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Em Nava v Gaubas
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Roca Batalla v Ja Faria"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Roca Batalla v Ja Faria
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Galan v Gi Fonio"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Galan v Gi Fonio
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Tirante v Dalla Valle"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Tirante v Dalla Valle
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          WTA Beijing 2024
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="S Zhang v McCartn Kessler"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              S Zhang v McCartn Kessler
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="M Trevisan v Taylo Townsend"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              M Trevisan v Taylo Townsend
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="L Bronzetti v N Osaka"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              L Bronzetti v N Osaka
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="El Avanesyan v Emi Bektas"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              El Avanesyan v Emi Bektas
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="D Parry v En- Liang"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              D Parry v En- Liang
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="A Kalinina v Sramkova"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              A Kalinina v Sramkova
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Q Wang v Aly Parks"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Q Wang v Aly Parks
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Volynets v D Galfi"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Volynets v D Galfi
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="V Gracheva v H Baptiste"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              V Gracheva v H Baptiste
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Yu Starodubtseva v Siegemund"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Yu Starodubtseva v Siegemund
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          ATP Tokyo 2024
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Giron v Hurkacz"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Giron v Hurkacz
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Sh Mochizuki v Humbert"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Sh Mochizuki v Humbert
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bot Van de Zandschulp v Berrettini"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bot Van de Zandschulp v Berrettini
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          ATP Beijing 2024
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Carballes Baena v P Kotov"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Carballes Baena v P Kotov
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Ziz Bergs v Moutet"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Ziz Bergs v Moutet
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Safiullin v Bautista Agut"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Safiullin v Bautista Agut
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              data-toggle="collapse"
              className="dropdown-toggle"
              style={{ textTransform: "capitalize" }}
            >
              <span className="sports-icon horseside" /> Horse
            </a>
            <div id="cricketSubmenu" style={{ display: "none" }}>
              <div id="sidetree">
                <ul id="tree">
                  <li style={{ marginLeft: "15px" }}>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Goodwood
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Goodwood 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Goodwood 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          IE-Listowel
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Listowel 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Listowel 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Kempton
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Kempton 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Kempton 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Doomben
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Doomben (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Doomben (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          FR-Compiegne
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Compiegne (FRA) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Compiegne (FRA) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Bathurst
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bathurst (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bathurst (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Perth
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Perth 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Perth 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Redcliffe
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Redcliffe (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Redcliffe (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Warwick Farm
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Warwick Farm (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Warwick Farm (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Strathalbyn
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Strathalbyn (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Strathalbyn (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Bendigo
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bendigo (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bendigo (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Belmont
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Belmont (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Belmont (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Bendigo
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bendigo (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bendigo (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          ZA-Greyville
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Greyville (RSA) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Greyville (RSA) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Redcar
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Redcar 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Redcar 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Charlton
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Charlton (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Charlton (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          FR-Toulouse
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Toulouse (FRA) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Toulouse (FRA) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a
              data-toggle="collapse"
              className="dropdown-toggle"
              style={{ textTransform: "capitalize" }}
            >
              <span className="sports-icon greyhoundside" />
              Greyhound
            </a>
            <div id="cricketSubmenu" style={{ display: "none" }}>
              <div id="sidetree">
                <ul id="tree">
                  <li style={{ marginLeft: "15px" }}>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Bendigo
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Bendigo (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Bendigo (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Mandurah
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Mandurah (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Mandurah (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Richmond
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Richmond (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Richmond (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Gunnedah
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Gunnedah (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Gunnedah (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Temora
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Temora (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Temora (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Ballarat
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Ballarat (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Ballarat (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Taree
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Taree (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Taree (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-The Meadows
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="The Meadows (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              The Meadows (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Rockhampton
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Rockhampton (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Rockhampton (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          AU-Albion Park
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Albion Park (AUS) 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Albion Park (AUS) 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Nottingham
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Nottingham 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Nottingham 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Harlow
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Harlow 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Harlow 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="treeview"
                      style={{
                        position: "relative",
                        padding: "4px 0px 0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        verticalAlign: "middle",
                      }}
                    >
                      <svg
                        className="toggle"
                        viewBox="64 -65 897 897"
                        style={{
                          width: "1em",
                          height: "1em",
                          marginRight: "10px",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          opacity: 1,
                        }}
                      >
                        <g>
                          <path d="M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" />
                        </g>
                      </svg>
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          fontSize: "0.6em",
                          verticalAlign: "middle",
                          marginRight: "0px",
                        }}
                      />
                      <span style={{ verticalAlign: "middle" }}>
                        <span
                          className="treeviewnode"
                          style={{
                            fontSize: "11px",
                            color: "rgb(0, 0, 0)",
                            cursor: "pointer",
                          }}
                        >
                          GB-Monmore
                        </span>
                      </span>
                      <div
                        style={{
                          height: "0px",
                          opacity: 0,
                          transform: "translate3d(20px, 0px, 0px)",
                          willChange: "transform, opacity, height",
                          marginLeft: "6px",
                          padding: "4px 0px 0px 14px",
                          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                        }}
                      >
                        <div
                          className="treeview"
                          style={{
                            position: "relative",
                            padding: "4px 0px 0px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            className="toggle"
                            viewBox="64 -65 897 897"
                            style={{
                              width: "1em",
                              height: "1em",
                              marginRight: "10px",
                              cursor: "pointer",
                              verticalAlign: "middle",
                              opacity: "0.3",
                            }}
                          >
                            <g>
                              <path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" />
                            </g>
                          </svg>
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                              fontSize: "0.6em",
                              verticalAlign: "middle",
                              marginRight: "0px",
                            }}
                          />
                          <span style={{ verticalAlign: "middle" }}>
                            <span
                              className="treeviewnode"
                              title="Monmore 25th Sep"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: "11px",
                                cursor: "pointer",
                              }}
                            >
                              Monmore 25th Sep
                            </span>
                          </span>
                          <div
                            style={{
                              height: "0px",
                              opacity: 0,
                              transform: "translate3d(20px, 0px, 0px)",
                              willChange: "transform, opacity, height",
                              marginLeft: "6px",
                              padding: "4px 0px 0px 14px",
                              borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul className="list-unstyled components bb-none">
          <li>
            <a href="https://www.khiladi786.com/royalcasino">
              <span className="sports-icon casinoside" />
              Indian Poker
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/indianpoker">
              <span className="sports-icon indianpokerside" />
              Indian Poker II
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/spribe">
              <img
                className="ball-images-tab"
                src="static/images/aviator-icon.svg"
                alt=""
              />
              Aviator
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/casino3/aesexybcrt">
              <span className="sports-icon casinoside" />
              AE SEXY
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/evolution">
              <img
                className="ball-images-tab"
                src="static/images/casino-icon.svg"
                alt=""
              />
              Evolution
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/livecasino">
              <span className="sports-icon casinoside" />
              Live Casino
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/vivo">
              <img
                className="ball-images-tab"
                src="static/images/casino-icon.svg"
                alt=""
              />
              Vivo
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/betgames">
              <img
                className="ball-images-tab"
                src="static/images/casino-icon.svg"
                alt=""
              />
              Betgames
            </a>
          </li>
          <li>
            <a href="https://www.khiladi786.com/casino3">
              <span className="sports-icon casinoside" />
              Casino III
            </a>
          </li>
        </ul>
        <ul className="list-unstyled components" />
      </div>
    </div>
  );
};

export default LeftSidebar;
