import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export type Llogaria = {
  _id: string;
  name: string;
};

export const get_llogaria = async () => {
  try {
    const res = await axios.get("http://localhost:8000/exc");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const add_llogaria = async (body: { name: string }) => {
  try {
    const res = await axios.post("http://localhost:8000/exc", body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const get_llogaria_by_id = async (param: { id: string }) => {
  try {
    const res = await axios.get(`http://localhost:8000/exc/${param.id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const update_llogaria = async (body: { name: string; id: string }) => {
  try {
    const res = await axios.put(`http://localhost:8000/exc/${body.id}`, {
      name: body.name,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const delete_llogaria = async (param: { id: string }) => {
  try {
    const res = await axios.delete(`http://localhost:8000/exc/${param.id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const initialState: Llogaria = { name: "", _id: "" };

const Exc = () => {
  const [llogarite, setLlogarite] = useState<Llogaria[]>([]);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [llogaria, setLlogaria] = useState<Llogaria>(initialState);

  const [open, setOpen] = useState<boolean>(false);
  const [openDel, setOpenDel] = useState<boolean>(false);
  const [openCre, setOpenCre] = useState<boolean>(false);

  const openCreate = (input: Llogaria) => {
    setOpenCre(true);
    setLlogaria(input);
  };

  const openEdit = (input: Llogaria) => {
    setOpen(true);
    setLlogaria(input);
    console.log(input);
  };

  const openDelete = (input: Llogaria) => {
    setOpenDel(true);
    setLlogaria(input);
  };

  const onEdit = (input: Llogaria) => {
    update_llogaria({ name: input.name, id: input._id });
    setRefetch(true);
    setOpen(false);
  };

  const onDelete = (input: Llogaria) => {
    delete_llogaria({ id: input._id });
    setRefetch(true);
    setOpenDel(false);
  };

  const onCreate = (input: Llogaria) => {
    add_llogaria({ name: input.name });
    setRefetch(true);
    setOpenCre(false);
    setLlogaria(initialState);
  };

  useEffect(() => {
    get_llogaria().then((llogaria) => setLlogarite(llogaria));
    setRefetch(false);
  }, [refetch]);
  return (
    <>
      {/* edit modal */}
      <Modal
        title="Edit Zone"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {
          onEdit(llogaria);
        }}
        loading={false}
      >
        <input
          className="input"
          placeholder="Name"
          value={llogaria.name}
          onChange={(e) => setLlogaria({ ...llogaria, name: e.target.value })}
        />
      </Modal>

      {/* delete modal */}
      <Modal
        title="Delete zone"
        isOpen={openDel}
        onClose={() => setOpenDel(false)}
        onSubmit={() => {
          onDelete(llogaria);
        }}
        loading={false}
        submitText="Delete"
      >
        <>Are you sure you want to delete this?</>
      </Modal>

      {/* create modal */}
      <Modal
        title="Create zone"
        isOpen={openCre}
        onClose={() => setOpenCre(false)}
        onSubmit={() => {
          onCreate(llogaria);
        }}
        loading={false}
      >
        <span>Name</span>
        <input
          className="input"
          placeholder="Name"
          value={llogaria.name}
          onChange={(e) => setLlogaria({ ...llogaria, name: e.target.value })}
        />
      </Modal>

      <Button text="Create" onClick={() => openCreate(initialState)} />
      <div className="">
        <Table
          header={["name"]}
          rows={llogarite}
          editClick={openEdit}
          deleteClick={openDelete}
        />
      </div>
    </>
  );
};

export { Exc };
