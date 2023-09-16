import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Table } from "../components/Table";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Llogaria, get_llogaria } from "./Exc";

type Transaksioni = {
  _id: string;
  name: string;
  llogaria?: Llogaria;
};

const get_transaksioni = async () => {
  try {
    const res = await axios.get("http://localhost:8000/exc/trans");
    return res.data as any[];
  } catch (err) {
    console.log(err);
  }
};

const add_transaksioni = async (body: {
  name: string;
  llogaria_ID: string;
}) => {
  try {
    const res = await axios.post("http://localhost:8000/exc/trans/", body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const get_transaksioni_by_id = async (param: { id: string }) => {
  try {
    const res = await axios.get(`http://localhost:8000/exc/trans/${param.id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const update_transaksioni = async (body: {
  name: string;
  id: string;
  llogaria_ID: string;
}) => {
  try {
    const res = await axios.put(`http://localhost:8000/exc/trans/${body.id}`, {
      name: body.name,
      llogaria_ID: body.llogaria_ID,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const delete_transaksioni = async (param: { id: string }) => {
  try {
    const res = await axios.delete(
      `http://localhost:8000/exc/trans/${param.id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const initialState: Transaksioni = { name: "", _id: "" };

const initialState1: Llogaria = { name: "", _id: "" };

const Transaksioni = () => {
  const [llogarite, setLlogarite] = useState<Llogaria[]>([]);
  const [llogaria, setLlogaria] = useState<Llogaria>(initialState1);
  const [transaksionet, setTransaksionet] = useState<
    Transaksioni[] | undefined
  >([]);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [transaksioni, setTransaksioni] = useState<Transaksioni>(initialState);

  const [open, setOpen] = useState<boolean>(false);
  const [openDel, setOpenDel] = useState<boolean>(false);
  const [openCre, setOpenCre] = useState<boolean>(false);

  const openCreate = (input: Transaksioni) => {
    setOpenCre(true);
    setTransaksioni(input);
  };

  const openEdit = (input: Transaksioni) => {
    setOpen(true);
    setTransaksioni(input);
    console.log(input);
  };

  const openDelete = (input: Transaksioni) => {
    setOpenDel(true);
    setTransaksioni(input);
  };

  const onEdit = (input: any) => {
    console.log(input);
    update_transaksioni({
      name: input.name,
      id: input._id,
      llogaria_ID: llogaria._id,
    });
    setRefetch(true);
    setOpen(false);
  };

  const onDelete = (input: Transaksioni) => {
    delete_transaksioni({ id: input._id });
    setRefetch(true);
    setOpenDel(false);
  };

  const onCreate = (input: Transaksioni) => {
    console.log(input);
    console.log(llogaria);
    add_transaksioni({ name: input.name, llogaria_ID: llogaria._id });
    setRefetch(true);
    setOpenCre(false);
    setTransaksioni(initialState);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    console.log(val);
    const rez = llogarite.filter((x) => x.name === val);
    setLlogaria(rez[0] || initialState);
    console.log(llogaria);
  };

  useEffect(() => {
    console.log(llogaria);
  }, [llogaria]);

  useEffect(() => {
    get_llogaria().then((data: any[]) => {
      get_transaksioni().then((transaksioni) => {
        const list = transaksioni?.map((t) => {
          const llog = data.filter((l: Llogaria) => l._id === t.llogaria_ID);
          t.llogaria = llog.length === 0 ? "" : llog[0].name;
          return t;
        });
        console.log(list);
        setTransaksionet(list);
      });
    });

    setRefetch(false);
  }, [refetch]);

  useEffect(() => {
    get_llogaria().then((data) => setLlogarite(data));
  }, [openCre === true]);

  return (
    <>
      {/* edit modal */}
      <Modal
        title="Edit Zone"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {
          onEdit(transaksioni);
        }}
        loading={false}
      >
        <span>Name</span>
        <input
          className="input"
          placeholder="Name"
          value={transaksioni.name}
          onChange={(e) =>
            setTransaksioni({ ...transaksioni, name: e.target.value })
          }
        />
        <span>LLogaria</span>
        <select
          className="select"
          value={llogaria.name}
          onChange={handleChange}
        >
          {llogarite &&
            llogarite.map((x) => <option key={x._id}>{x.name}</option>)}
        </select>
      </Modal>

      {/* delete modal */}
      <Modal
        title="Delete zone"
        isOpen={openDel}
        onClose={() => setOpenDel(false)}
        onSubmit={() => {
          onDelete(transaksioni);
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
          onCreate(transaksioni);
        }}
        loading={false}
      >
        <span>Name</span>
        <input
          className="input"
          placeholder="Name"
          value={transaksioni.name}
          onChange={(e) =>
            setTransaksioni({ ...transaksioni, name: e.target.value })
          }
        />
        <span>LLogaria</span>
        <select
          className="select"
          value={llogaria.name}
          onChange={handleChange}
        >
          {llogarite &&
            llogarite.map((x) => <option key={x._id}>{x.name}</option>)}
        </select>
      </Modal>

      <Button text="Create" onClick={() => openCreate(initialState)} />
      <div className="">
        <Table
          header={["name", "llogaria"]}
          rows={transaksionet}
          editClick={openEdit}
          deleteClick={openDelete}
        />
      </div>
    </>
  );
};

export { Transaksioni };
