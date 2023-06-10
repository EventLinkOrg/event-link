export type TableProps<T> = {
  header: string[];
  rows: T[] | undefined;
};

const Table = <T extends Record<string, any>>({
  header,
  rows,
}: TableProps<T>) => {
  return (
    <div className="flex w-full overflow-x-auto">
      <table className="table-compact table max-w-4xl">
        <thead>
          <tr>
            {header.map((headerTitle) => (
              <th key={headerTitle}>{headerTitle}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, index) => (
              <tr key={index}>
                {header.map((headerTitle) => (
                  <td key={headerTitle}>{row[headerTitle]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
