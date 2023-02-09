import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { retrievePageList } from '@/global/CommonService';
import { getDescendantPropValue } from '@/global/CommonUtils';
import NamespaceEnum from '@/constants/NamespaceEnum';

export interface SearchProps {
  placeholder: string,
  value?:string,
  namespace:NamespaceEnum,
  displayName:string,
  handleChange:any,
  params?:{},
}


const SearchSelect: React.FC<SearchProps> = props => {
  const { Option } = Select;
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState([]);


  useEffect(() => {
    retrievePageList(props.params?props.params:{}, props.namespace).then(res => {
      let deptArr:any = [];
      res.data.map((item:any)=>{
        if(item.deptId == 112 || item.deptId == 114 || item.deptId == 115 || item.deptId == 116 || item.deptId == 117 || item.deptId == 118 || item.deptId == 119){
          deptArr.push(item)
        }
      })
      setList(deptArr);
    });
  }, []);

  if(props.value && props.value != value) {
    setValue(props.value)
  }

  const handleSearch = (value: string) => {
    const params = { [props.displayName]: value };
    retrievePageList(params, props.namespace).then(res => {
      setList(res.data);
    });
  };
  const handleChange = (value: any) => {
    setValue(value);
    props.handleChange(value);
  };
  const options = list.map((value: any) => (
    <Option key={value.id} value={value.id}>
      {getDescendantPropValue(value,props.displayName)}
    </Option>
  ));

  return (
    <Select
      showSearch
      value={value || props.value}
      placeholder={props.searchPlaceholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};
SearchSelect.defaultProps = {
  placeholder: '搜索',
};
export default SearchSelect;
