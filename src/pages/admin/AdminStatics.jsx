import { useState } from "react";
import DatePicker from "../../components/common/DatePicker";
import useStatics from "../../hooks/useStatics";
import StaticChart from "../../components/admin/StaticChart";

const AdminStatics = () => {
  const [type, setType] = useState('일간');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const statics = useStatics({ type, startDate, endDate });
  const [result, setResult] = useState(null);
  
  const handleSearch = async () => {
    if (!startDate) {
      alert('시작 시간을 설정해주세요.');
      return;
    }

    if (!endDate) {
      alert('종료 시간을 설정해주세요.');
      return;
    }

    const response = await statics.search.mutateAsync({ type, startDate, endDate });
    setResult(response);
  };
  return (
    <div className="admin-statics">
      <div>
        <h1 className="main-title">방문자 통계</h1>
      </div>
      <div className="list">
        <div>
          <img src="/images/admin/statics/statistics_icon01.png" />
          <strong>{statics.statics.data?.total}</strong>
          <span>총 방문자</span>
        </div>
        <div>
          <img src="/images/admin/statics/statistics_icon02.png" />
          <strong>{statics.statics.data?.today}</strong>
          <span>
            {`전일 대비 ${Math.abs(statics.statics.data?.diffToday)}명`}
            {
              !!statics.statics.data?.diffToday && <i className={`${statics.statics.data?.diffToday < 0 ? 'minus-icon' : 'plus-icon'}`}/>
            }
          </span>
          <span>금일 방문자</span>
        </div>
        <div>
          <img src="/images/admin/statics/statistics_icon03.png" />
          <strong>{statics.statics.data?.thisWeek}</strong>
          <span>
            {`전주 대비 ${Math.abs(statics.statics.data?.diffWeek)}명`}
            {
              !!statics.statics.data?.diffWeek && <i className={`${statics.statics.data?.diffWeek < 0 ? 'minus-icon' : 'plus-icon'}`}/>
            }
          </span>
          <span>주간 방문자</span>
        </div>
        <div>
          <img src="/images/admin/statics/statistics_icon04.png" />
          <strong>{statics.statics.data?.thisMonth}</strong>
          <span>
            {`전월 대비 ${Math.abs(statics.statics.data?.diffMonth)}명`}
            {
              !!statics.statics.data?.diffMonth && <i className={`${statics.statics.data?.diffMonth < 0 ? 'minus-icon' : 'plus-icon'}`}/>
            }
          </span>
          <span>월간 방문자</span>
        </div>
      </div>
      <div className="search">
        <h2>주간 방문자 검색</h2>
        <div>
          <div>
            <label>기간별 검색</label>
            <div className="select-div">
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>일간</option>
                <option>주간</option>
                <option>월간</option>
                <option>연간</option>
              </select>
            </div>
          </div>
          <div className="search-date">
            <label>기간별 검색</label>
            <div>
              <DatePicker
                name="startDate"
                value={startDate ? new Date(startDate) : null}
                onChange={setStartDate}
              />
              <span>~</span>
              <DatePicker
                name="endDate"
                value={endDate ? new Date(endDate) : null}
                onChange={setEndDate}
              />
            </div>
          </div>
        </div>
        <button className="search-button" onClick={handleSearch}>검색</button>
      </div>
      {
        result && (
          <div className="statics">
            <h2>주간 방문자</h2>
            <div className="chart">
              <StaticChart data={result} />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default AdminStatics;