import Loading from "../../components/common/Loading";
import GridView from "../../components/admin/GridView";
import { Link, useParams } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";

const AdminCounselingDetail = () => {
  const { id } = useParams();
  const productProps = [
    {
      key: 'count',
      label: '월 보관량',
      component: (data) => `상품수량 ${data.count}개 / 파레트랙 ${data.pallettrack}개 / 파레트랙 ${data.lightweightrack}개 / 박스 ${data.box}개`
    },
    {
      key: 'import1',
      label: '월 입고량',
      component: (data) => `${data.import1}개`
    },
    {
      key: 'export',
      label: '월 출고량',
      component: (data) => `${data.export}개`
    },
    {
      key: 'delivery',
      label: '월 택배건수',
      component: (data) => `${data.delivery}개`
    },
    {
      key: 'sku',
      label: 'SKU 상품수',
      component: (data) => `${data.sku}개`
    },
    {
      key: 'deliveryType',
      label: '택배포장방식'
    },
    {
      key: 'processing',
      label: '임가공작업'
    },
    {
      key: 'aircap',
      label: '에어캡사용'
    },
    {
      key: 'return1',
      label: '반품엽서등'
    },
  ];

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
  
  const customer = useCustomer('estimate', id);

  if (customer.estimate.isLoading) {
    return <Loading />;
  }
  return (
    <div className="admin-customer admin-estimate">
      <div>
        <h1 className="main-title">물류견적 상세보기</h1>
      </div>
      <h2>기본정보 입력</h2>
      <GridView props={props} data={customer.estimate.data} />
      <h2>월 보관 및 입/출고량</h2>
      <GridView props={productProps} data={customer.estimate.data} />
      <Link to="/admin/estimate" className="list">목록</Link>
    </div>
  )
};

export default AdminCounselingDetail;
