import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { retrievePageList } from '@/global/CommonService';
import { getDescendantPropValue, getMultipleDescendantPropValue } from '@/global/CommonUtils';
import NamespaceEnum from '@/constants/NamespaceEnum';

export interface SearchProps {
  placeholder: string,
  value?:string,
  namespace:NamespaceEnum,
  displayName:string,
  handleChange:any,
  idName?:string,
  params?:{},
}


const SearchSelect: React.FC<SearchProps> = props => {
  const { Option } = Select;
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState([]);

  const doSetList = (data:any) =>{
    let dataList = data;
    if(props.idName) {
      dataList = dataList.map((d:any)=>{ 
        let id = getMultipleDescendantPropValue(d, props.idName?props.idName:"id");
        if(id) {
          d.id = id;
        }
        return d;
      })
    }
    setList(dataList);
  }

  useEffect(() => {
    retrievePageList(props.params?props.params:{}, props.namespace).then(res => {
      doSetList(res.data);
    });
  }, []);

  const handleSearch = (value: string) => {
    const params = { [props.displayName]: value };
    retrievePageList(params, props.namespace).then(res => {
      doSetList(res.data);
    });
  };
  const handleChange = (value: any) => {
    setValue(value);
    props.handleChange(value);
  };
  const options = list.map((value: any) => (
    <Option key={value.id} value={value.id}>
      {getMultipleDescendantPropValue(value,props.displayName)}
    </Option>
  ));

  return (
    <Select
      showSearch
      defaultValue={value || props.value}
      placeholder={props.searchPlaceholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      mode="multiple"
    >
      {options}
    </Select>
  );
};
SearchSelect.defaultProps = {
  placeholder: '搜索',
};
export default SearchSelect;
