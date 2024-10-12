import Loading from "../../components/common/Loading";
import GridView from "../../components/admin/GridView";
import { Link, useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";

const AdminCounselingDetail = () => {
  const { id } = useParams();
  const props = [
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
      label: '상담내용'
    }
  ];
  
  const counseling = useCustomer('counseling', id);

  if (counseling.counseling.isLoading) {
    return <Loading />;
  }
  return (
    <div className="admin-customer admin-counseling">
      <div>
        <h1 className="main-title">간편상담 상세보기</h1>
      </div>
      <GridView props={props} data={counseling.counseling.data} />
      <Link to="/admin/counseling" className="list">목록</Link>
    </div>
  )
};

export default AdminCounselingDetail;
