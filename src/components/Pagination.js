import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import Icon from './Icon'

const PaginationComponent = props => {
    return (

        <Pagination className="d-flex justify-content-center mb-5 mt-3">
            <PaginationItem>
                <a className="page-arrow" href="#">
                    <span aria-hidden="true"><Icon icon="angle-left-1" className="page-icon" /></span>
                    <span className="sr-only">Previous</span>
                </a>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href="#">
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <a className="page-arrow" href="#">
                    <span aria-hidden="true"><Icon icon="angle-right-1" className="page-icon" /></span>
                    <span className="sr-only">Next</span>
                </a>
            </PaginationItem>

        </Pagination>
    )
};

export default PaginationComponent;