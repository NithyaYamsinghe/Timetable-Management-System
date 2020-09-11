// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import TagItem from "./../tables/TagItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const TagTable = () => {
  const condition = navigator.onLine;

  if (!condition) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No internet connection!",
    });
  }
  return (
    <StudentConsumer>
      {(value) => {
        const {
          sortedTags,
          filterTag,
          deleteTag,
          handleTagChange,
          search,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleTagChange}
              search={search}
              placeholder="Search"
            />
            {sortedTags.length === 0 ? (
              <div
                className="col  text-color-ash text-center "
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  marginBottom: "500px",
                }}
              >
                sorry, no items matched your search
              </div>
            ) : (
              <Table className="mt-3">
                <thead>
                  <tr>
                    <th>Tag</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTags.map((tag) => (
                    <TagItem
                      key={tag._id}
                      tag={tag}
                      deleteTag={deleteTag}
                      filterTag={filterTag}
                    />
                  ))}
                </tbody>
              </Table>
            )}
          </Container>
        );
      }}
    </StudentConsumer>
  );
};

export default TagTable;
