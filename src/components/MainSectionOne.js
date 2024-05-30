import { Container, Row, Col } from "react-bootstrap";
import images from "./image_management/ImageImporterMainOne";
import styleMSO from "../my-style.module.scss";
import * as Icon from "react-bootstrap-icons";

function MainSectionOne() {
  return (
    <Container className={`${styleMSO.MSOContainer}`}>
      <Row>
        {/* Video */}
        <Col xs={12} xl={8}>
          <Row>
            <Col
              xl={8}
              style={{
                paddingRight: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#f5e2cf", display: "inline-block" }}>
                Videos
              </h3>
              <span style={{ color: "#f5e2cf" }}>Browse all videos</span>
            </Col>
          </Row>
          <Row className={`${styleMSO.barisSatu}`}>
            <Col xl={8} className={`${styleMSO.imgParent} position-relative`}>
              <img
                src={images[0]}
                alt="programmer"
                className={`${styleMSO.imgChild}`}
              />
              <span className={styleMSO.spanPembungkus}>
                <h3>How to improve your skills</h3>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>WaseemArshad</span>
                  <span>187867 views</span>
                </span>
              </span>
            </Col>
            <Col xl={4} className={`${styleMSO.grandMa} d-flex flex-column`}>
              <Col
                xl
                className={`${styleMSO.imgParent} position-relative flex-fill`}
              >
                <img
                  src={images[1]}
                  alt="ngopi bareng programmer"
                  className={`${styleMSO.imgChild}`}
                />
                <span className={styleMSO.spanPembungkus}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Michael Collip</span>
                    <span>27546 views</span>
                  </span>
                </span>
              </Col>
              <Col
                xl
                className={`${styleMSO.imgParent} position-relative flex-fill`}
              >
                <img
                  src={images[2]}
                  alt="komputer"
                  className={`${styleMSO.imgChild}`}
                />
                <span className={styleMSO.spanPembungkus}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Mark Zullic</span>
                    <span>9785 views</span>
                  </span>
                </span>
              </Col>
            </Col>
          </Row>
          <Row className={`${styleMSO.barisDua}`}>
            <Col xl className={`${styleMSO.imgParent} position-relative`}>
              <img
                src={images[3]}
                alt="meja pc"
                className={`${styleMSO.imgChild}`}
              />
              <span className={styleMSO.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Wistom Zowski</span>
                  <span>10978 views</span>
                </span>
              </span>
            </Col>
            <Col xl className={`${styleMSO.imgParent} position-relative`}>
              <img
                src={images[4]}
                alt="kursi pc"
                className={`${styleMSO.imgChild}`}
              />
              <span className={styleMSO.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Lawmon kyok</span>
                  <span>15972 views</span>
                </span>
              </span>
            </Col>
            <Col xl className={`${styleMSO.imgParent} position-relative`}>
              <img
                src={images[5]}
                alt="meja dan kursi pc"
                className={`${styleMSO.imgChild}`}
              />
              <span className={styleMSO.spanPembungkus}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Brandon hawold</span>
                  <span>22456 views</span>
                </span>
              </span>
            </Col>
          </Row>
        </Col>
        {/* Activity */}
        <Col
          xs={12}
          xl={4}
          className={`${styleMSO.activityCol}`}
          // style={{ height: "39rem", overflow: "auto" }}
        >
          <Row>
            <Col
              style={{
                paddingRight: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ color: "#f5e2cf", display: "inline-block" }}>
                Activity
              </h3>
              <span style={{ color: "#f5e2cf" }}>
                View timeline / Filter Acvities
              </span>
            </Col>
          </Row>
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "#f5e2cf",
              marginBottom: "10px",
            }}
          ></div>
          <div
            className="d-flex flex-column row-gap-3"
            style={{
              width: "100%",
              height: "35rem",
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarColor: "#f5e2cf #953e46",
              scrollbarWidth: "thin",
            }}
          >
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[5]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>John</strong> commented
                  <br /> saya telah lama menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[3]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>Ziel</strong> commented <br /> saya telah lama
                  menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[1]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>Mark</strong> commented <br /> saya telah lama
                  menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[0]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>Michael</strong> commented <br /> saya telah lama
                  menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[4]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>Rachel</strong> commented <br /> saya telah lama
                  menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col xs={4}>
                <img
                  src={images[4]}
                  alt="meja dan kursi pc"
                  className="rounded"
                />
              </Col>
              <Col xs={8}>
                <span>
                  <strong>Viola</strong> commented <br /> saya telah lama
                  menggunakan website ini.. <br />
                  <Icon.ChatFill /> 2 minutes ago
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainSectionOne;
