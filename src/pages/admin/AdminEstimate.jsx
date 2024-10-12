import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import useCustomer from "../../hooks/useCustomer";
import Loading from "../../components/common/Loading";
import Pagination from "../../components/common/Pagination";
import { useRecoilState } from "recoil";
import { currentPageState } from "../../store/pagination";
import { Link } from "react-router-dom";

const AdminCounseling = () => {
  const PER_PAGE = 10;
  const [total, setTotal] = useState(0);
  const [currentPageValue, setCurrentPageValue] = useRecoilState(currentPageState);
  const [list, setList] = useState([]);
  const customer = useCustomer('estimate-list');
  const props = [
    {
      key: 'seq',
      label: 'NO.'
    },
    {
      key: 'company',
      label: '회사명'
    },
    {
      key: 'name',
      label: '담당자명'
    },
    {
      key: 'phone',
      label: '연락처'
    },
    {
      key: 'email',
      label: '이메일'
    },
    {
      key: 'productStr',
      label: '상품정보'
    },
    {
      key: 'content',
      label: '상담내용',
      component: (item) => <Link to={`/admin/estimate/${item?.seq}`} className="detail">상세보기</Link>
    },
    // {
    //   key: 'delete',
    //   label: '삭제',
    //   component: (item) => <button className="delete" onClick={() => deleteCounseling(item.seq)}><img src="/images/admin/customer/delete_icon.png" /></button>
    // }
  ];

  // const deleteCounseling = (num) => {

  // }

  const move = (page) => {
    setCurrentPageValue(page);
  };

  useEffect(() => {
    setTotal(customer.estimateList.data?.length || 0);
  }, [customer.estimateList.data, setTotal]);

  useEffect(() => {
    if (!customer.estimateList.data) return;
    const data = customer.estimateList.data;
    const page = currentPageValue;
    
    setList(data.slice((page - 1) * PER_PAGE, page * PER_PAGE));
  }, [currentPageValue, customer.estimateList.data]);

  if (customer.estimateList.isLoading) {
    return <Loading />;
  }

  return (
    <div className="admin-customer admin-estimate">
      <div>
        <h1 className="main-title">물류견적 목록</h1>
      </div>
      <Table props={props} data={list}/>
      <Pagination page={currentPageValue} total={total} perPage={PER_PAGE} move={move} />
    </div>
  )
};

export default AdminCounseling;
