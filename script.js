const division = document.createElement('div');
division.setAttribute("class","container");
division.innerHTML = `
<table class="table table-dark" id="our-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="table-body">

        </tbody>
    </table>
`;


const division1 = document.createElement('div');
division1.setAttribute("class","container");
division1.innerHTML = `
<div id="pagination-wrapper"></div>
`;
document.body.append(division,division1);