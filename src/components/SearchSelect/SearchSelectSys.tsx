import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { retrievePageListSys, retrievePageListSysSys } from '@/global/CommonService';
import { getDescendantPropValue, getMultipleDescendantPropValue } from '@/global/CommonUtils';

import NamespaceEnum from '@/constants/NamespaceEnum';

export interface SearchProps {
  placeholder: string,
  value?: string,
  namespace: NamespaceEnum,
  displayName: string,
  handleChange: any,
  idName?: string,
  disabled?: any,
  params?: {},

  filter?: (item: any) => boolean;
}


const SearchSelectSys: React.FC<SearchProps> = props => {
  const { Option } = Select;
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState([]);

  const doSetList = (data: any) => {
    let dataList = data;
    if (props.filter) {
      dataList = dataList.filter((d: any) => { return props.filter == undefined || props.filter(d); })
    }
    if (props.idName) {
      dataList = dataList.map((d: any) => {
        let id = getMultipleDescendantPropValue(d, props.idName ? props.idName : "id");
        if (id) {
          d.id = id;
        }
        return d;
      })
    }
    // console.log(JSON.stringify(dataList))
    setList(dataList);
  }

  useEffect(() => {
    retrievePageListSys(props.params ? props.params : {}, props.namespace).then(res => {
      doSetList(res.data);
    });
  }, []);

  if (props.value && props.value != value) {
    setValue(props.value)
  }


  const handleSearch = (value: string) => {
    const params = { [props.displayName]: value };
    retrievePageListSys(params, props.namespace).then(res => {
      doSetList(res.data);
    });
  };
  const handleChange = (value: any, e: any) => {
    setValue(value);
    props.handleChange(value, e);
  };
  const options = list.map((value: any) => (
    <Option key={value} value={`${value.id}`}>
      {getMultipleDescendantPropValue(value, props.displayName)}
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
      disabled={props.disabled}
    >
      {options}
    </Select>
  );
};
SearchSelectSys.defaultProps = {
  placeholder: '搜索',
};
export default SearchSelectSys;
