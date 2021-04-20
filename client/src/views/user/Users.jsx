import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "src/store/actions/user";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CDataTable,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
import {getUser} from 'src/store/actions/user'
const fields = [
  "id",
  "nip",
  "name",
  "username",
  "email",
  "jabatan",
  "role",
  "createdAt",
];
const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.userReducer.users);
  const handleClickRow = (id) => {
    console.log(id);
    dispatch(getUser(id))
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">
                Users
              </h4>
              <div className="small text-muted">To manage users</div>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={usersData}
            fields={fields}
            striped
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            clickableRows
            tableFilter
            onRowClick={(item) => handleClickRow(item.id)}
            scopedSlots={{
              createdAt: (item) => (
                <td>{moment(item.createdAt).format("L")}</td>
              ),
              role: (item) => <td>{item.Role.name}</td>,
            }}
          />
        </CCardBody>
        <CCardFooter></CCardFooter>
      </CCard>
    </>
  );
};

export default Users;
