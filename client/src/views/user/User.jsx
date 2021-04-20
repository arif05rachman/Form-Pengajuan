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
import { useParams } from "react-router-dom";
import { getUser, putUser } from "src/store/actions/user";

const User = () => {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState({});
  const userId = useParams().id;
  const user = useSelector((state) => state.userReducer.user);
  // Handle Form
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = () => {
    console.log(editUser);
    dispatch(putUser(editUser));
  };

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  return (
    <>
      <CCard>
        <CCardHeader className="text-center">
          <h5>Detail User</h5>
        </CCardHeader>
        <CCardBody>
          <CForm
            action=""
            className="form-horizontal"
            onChange={(e) => handleChange(e)}
          >
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="nip">
                NIP
              </CLabel>
              <CCol sm="6">
                <CInput
                  id="nip"
                  name="nip"
                  placeholder="NIP"
                  type="text"
                  defaultValue={user.nip}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="nama">
                Nama
              </CLabel>
              <CCol sm="6">
                <CInput
                  id="nama"
                  name="nama"
                  placeholder="Nama"
                  type="text"
                  defaultValue={user.nama}
                />
              </CCol>
            </CFormGroup>
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
                  defaultValue={user.username}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="email">
                Email
              </CLabel>
              <CCol sm="6">
                <CInput
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  defaultValue={user.email}
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel sm="5" col htmlFor="jabatan">
                Jabatan
              </CLabel>
              <CCol sm="6">
                <CInput
                  id="jabatan"
                  name="jabatan"
                  placeholder="Jabatan"
                  type="text"
                  defaultValue={user.jabatan}
                />
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CLabel sm="5" col htmlFor="roleId">
                Role
              </CLabel>
              <CCol sm="6">
                <CSelect
                  custom
                  name="roleId"
                  id="roleId"
                  autoComplete="roleId"
                  defaultValue={user.roleId}
                >
                  <option value={1} key={1}>
                    User
                  </option>
                  <option value={2} key={2}>
                    Teknisi
                  </option>
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
          <CButton type="reset" size="sm" color="danger" to="/users">
            <CIcon name="cil-ban" /> cancel
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default User;
