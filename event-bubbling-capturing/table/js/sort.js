'use strict';

function handleTableClick(event) {
    if (event.target.tagName === 'TH') {
        let direction = 1;
        if (this.dataset.sortBy === event.target.dataset.propName) {
            direction = -1;
        }
        event.target.dataset.dir = direction;
        table.dataset.sortBy = event.target.dataset.propName;
        sortTable(event.target.dataset.propName, direction);
    }
  
}
