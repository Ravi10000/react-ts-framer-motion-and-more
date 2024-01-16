import { createColumnHelper } from "@tanstack/react-table";

type User = {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
}
function Table() {
    const columnHelper = createColumnHelper<User>();
    const columns = [
        columnHelper.accessor("firstName", { cell: info => info.getValue() }),
        columnHelper.accessor("lastName", { cell: info => info.getValue() }),
        columnHelper.accessor("age", { cell: info => info.getValue() }),
        columnHelper.accessor("email", { cell: info => info.getValue() }),
    ]
    return (<table></table>);
}

export default Table;