import { Button } from "./Button";

export type TableProps<T> = {
  header: string[];
  rows: T[] | undefined;
  editClick?: (input: T) => void;
  deleteClick?: (input: T) => void;
};

const Table = <T extends Record<string, any>>({
  header,
  rows,
  editClick,
  deleteClick,
}: TableProps<T>) => {
  return (
    <div className="flex w-full overflow-x-auto">
      <table className="table-compact table max-w-4xl">
        <thead>
          <tr>
            {header.map((headerTitle) => (
              <th key={headerTitle}>{headerTitle}</th>
            ))}
            {editClick && <th key={"edit"}>Edit</th>}
            {deleteClick && <th key={"delete"}>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, index) => (
              <tr key={index}>
                {header.map((headerTitle) => (
                  <td key={headerTitle}>{row[headerTitle]}</td>
                ))}
                {editClick && (
                  <td>
                    {<Button text="Edit" onClick={() => editClick(row)} />}
                  </td>
                )}
                {deleteClick && (
                  <td>
                    {<Button text="Delete" onClick={() => deleteClick(row)} />}
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
