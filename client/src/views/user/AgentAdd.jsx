import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CForm,
  CFormGroup,
  CLabel,
  CCol,
  CInput,
  CButton,
  CSwitch,
  CSelect,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { postAgent } from "src/store/actions/agent";
import {
  getCountry,
  getState,
  getCity,
  getDistrict,
  getSubDistrict,
  getZipCode,
} from "src/store/actions/wilayah";

const AgentAdd = () => {
  const dispatch = useDispatch();
  const [agent, setAgent] = useState({
    username: "",
    nama: "",
    districtId: 0,
    subDistrictId: 0,
    countryId: 0,
    stateId: 0,
    cityId: 0,
    zipcode: "",
  });
  const [districtCode, setDistrictCode] = useState("");
  // GET WILAYAH
  const countries = useSelector((state) => state.wilayahReducer.countries);
  const states = useSelector((state) => state.wilayahReducer.states);
  const cities = useSelector((state) => state.wilayahReducer.cities);
  const districts = useSelector((state) => state.wilayahReducer.districts);
  const subDistricts = useSelector(
    (state) => state.wilayahReducer.subDistricts
  );
  const zipCodes = useSelector((state) => state.wilayahReducer.zipCodes);

  // Handle Form
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "isActive") {
      e.target.checked ? (value = true) : (value = false);
    }
    if (name === "districtId") {
      let dist = districts.find((val) => val.districtId === +value);
      setDistrictCode(dist.code);
    }
    setAgent({ ...agent, [name]: value });
  };

  const handleSubmit = () => {
    console.log(agent)
    dispatch(postAgent(agent));
  };

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getState());
  }, []);

  useEffect(() => {
    dispatch(getCity(agent.stateId));
  }, [agent.stateId]);

  useEffect(() => {
    dispatch(getDistrict(agent.cityId));
  }, [agent.cityId]);

  useEffect(() => {
    dispatch(getSubDistrict(agent.districtId));
  }, [agent.districtId]);

  useEffect(() => {
    dispatch(getZipCode(districtCode));
    console.log(districtCode);
  }, [districtCode]);

  return (
    <>
      <CCard>
        <CCardHeader className="text-center">
          <h5>Add Agent</h5>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            className="form-horizontal"
            onChange={(e) => handleChange(e)}
          >
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="username">
                Username
              </CLabel>
              <CCol sm="6">
                <CInput
                  id="username"
                  name="username"
                  placeholder="Username"
                  type="text"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="nama">
                Nama
              </CLabel>
              <CCol sm="6">
                <CInput id="nama" name="nama" placeholder="Nama" type="text" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="Country">
                Country
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="countryId"
                  id="countryId"
                  autoComplete="Country"
                >
                  <option value="0">Please Select...</option>
                  {countries ? (
                    countries.map((country) => {
                      return (
                        <option
                          value={country.countryid}
                          key={country.countryid}
                        >
                          {country.name}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="State">
                State
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="stateId"
                  id="stateId"
                  autoComplete="State"
                >
                  <option value="0">Please Select...</option>
                  {states ? (
                    states.map((state) => {
                      return (
                        <option value={state.stateId} key={state.stateId}>
                          {state.name}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="City">
                City
              </CLabel>
              <CCol sm="6">
                <CSelect custom name="cityId" id="cityId" autoComplete="City">
                  <option value="0">Please Select...</option>
                  {cities ? (
                    cities.map((city) => {
                      return (
                        <option value={city.cityId} key={city.cityId}>
                          {city.name}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="District">
                District
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="districtId"
                  id="districtId"
                  autoComplete="District"
                >
                  <option value="0">Please Select...</option>
                  {districts ? (
                    districts.map((district) => {
                      return (
                        <option
                          value={district.districtId}
                          key={district.districtId}
                          code={district.code}
                        >
                          {district.name}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="Sub District">
                Sub District
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="subDistrictId"
                  id="subDistrictId"
                  autoComplete="Sub District"
                >
                  <option value="0">Please Select...</option>
                  {subDistricts ? (
                    subDistricts.map((subDistrict) => {
                      return (
                        <option
                          value={subDistrict.subdistrictId}
                          key={subDistrict.subdistrictId}
                        >
                          {subDistrict.name}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="Zip Code">
                Zip Code
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="zipcode"
                  id="zipcode"
                  autoComplete="Zip Code"
                >
                  <option value="0">Please Select...</option>
                  {zipCodes ? (
                    zipCodes.map((zipCode) => {
                      return (
                        <option
                          value={zipCode.zipcode}
                          key={zipCode.zipcode}
                        >
                          {zipCode.zipcode}
                        </option>
                      );
                    })
                  ) : (
                    <CSpinner />
                  )}
                </CSelect>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton
            type="submit"
            size="sm"
            color="primary"
            className="mr-3"
            onClick={handleSubmit}
          >
            <CIcon name="cil-scrubber" /> Save
          </CButton>
          <CButton type="reset" size="sm" color="danger" to="/agents">
            <CIcon name="cil-ban" /> cancel
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default AgentAdd;
