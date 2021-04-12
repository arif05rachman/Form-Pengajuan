import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { LoaderPage } from "src/reusable";
import { useDispatch, useSelector } from "react-redux";
const Forgot = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.isLoadingReducer);
  const [login, setForgot] = useState({});
  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setForgot({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {}, []);

  const linkToLogin = () => {
    history.push("/login");
  };
  return (
    <>
      <LoaderPage showLoaderPage={isLoading} />
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="6">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Forgot Password?</h1>
                      <p className="text-muted">
                        No worries! Enter email and we will send you a reset
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Email"
                          autoComplete="email"
                          id="email"
                          onChange={handleChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={handleSubmit}
                          >
                            Submit
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton
                            color="link"
                            className="px-0"
                            onClick={linkToLogin}
                          >
                            Back to Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Forgot;
