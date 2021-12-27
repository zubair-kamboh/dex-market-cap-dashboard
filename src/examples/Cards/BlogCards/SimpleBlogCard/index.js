// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import MDTypography from "components/MDTypography";

function SimpleBlogCard({
  image,
  title,
  b1img,
  b1text,
  b2img,
  b2text,
  b3img,
  b3text,
  b4img,
  b4text,
  b5img,
  b5text,
  b6img,
  b6text,
}) {
  return (
    <Card>
      <MDBox p={3}>
        <MDBox mt={3} mb={3}>
          <img src={image} className="img-fluid card-main-img" alt="hh" />
          <MDTypography
            className="ms-2"
            display="inline"
            variant="h4"
            textTransform="capitalize"
            fontWeight="bold"
          >
            {title}
          </MDTypography>
        </MDBox>

        <div className="row">
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b1img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b1text}
              </MDTypography>{" "}
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b2img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b2text}
              </MDTypography>{" "}
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b3img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b3text}
              </MDTypography>{" "}
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b4img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b4text}
              </MDTypography>{" "}
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b5img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b5text}
              </MDTypography>{" "}
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="d-flex align-items-center minicard-container">
              <img src={b6img} className="img-fluid w-25" alt="hh" />
              <MDTypography
                className="ms-2"
                display="inline"
                variant="body1"
                textTransform="capitalize"
                fontWeight="bold"
                style={{ fontSize: "16px" }}
              >
                {b6text}
              </MDTypography>{" "}
            </div>
          </div>
        </div>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCard
SimpleBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  b1img: PropTypes.string.isRequired,
  b1text: PropTypes.string.isRequired,
  b2img: PropTypes.string.isRequired,
  b2text: PropTypes.string.isRequired,
  b3img: PropTypes.string.isRequired,
  b3text: PropTypes.string.isRequired,
  b4img: PropTypes.string.isRequired,
  b4text: PropTypes.string.isRequired,
  b5img: PropTypes.string.isRequired,
  b5text: PropTypes.string.isRequired,
  b6img: PropTypes.string.isRequired,
  b6text: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default SimpleBlogCard;
