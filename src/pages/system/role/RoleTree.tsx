import React, { Key } from 'react';
import request from '../../../api/base/request';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { TreeSelect } from 'antd';
import { Menu } from '../menu/data';

type treeData = {
  key?: string;
  title?: string;
  children?: any;
};

interface RoleTreeProps {
  value: {};
  onChange: any;
  notMultiple?: boolean
}

const useMenuTreeDataService = () => {
  const [result, setResult] = useState({ treeData: [] });

  useEffect(() => {
    request
      .post('sysMenu/list/tree', { page: '1', limit: '1000' })
      .then((data: any) => {
        const treeData: any = [];

        (data.page || [])
          .filter((item: Menu) => !item.parentId)
          .forEach((element: Menu) => {

            const nowList = treeList(element);

            treeData.push(nowList);
          });
        console.log('treeData', treeData)
        setResult({ treeData: treeData });
      })
      .catch((error) => setResult({ treeData: [] }));
  }, []);

  function treeList(element: Menu) {
    let newObj: treeData = {};
    newObj['title'] = element.name;
    newObj['key'] = element.menuId;
    newObj['value'] = element.menuId;
    newObj['label'] = element.name;
    if (element['children']) {
      let newChildren: treeData[] = [];
      element['children'].forEach((item: Menu) => {
        const nowList = treeList(item);
        newChildren.push(nowList);
      });
      newObj['children'] = newChildren;
    }
    return newObj;
  }

  return result;
};

const RoleTree: React.FC<RoleTreeProps> = (props) => {
  
  const onChange = (checkedKeys: Key[], info: {}) => {
    console.log('onChange', checkedKeys, info);
    // checkedKeys = checkedKeys.map((k) => {
    //   return k.value;
    // });
    if (props.onChange) {
      props.onChange([...checkedKeys]);
    }
  };

  const dataService = useMenuTreeDataService();
  //console.log(dataService);

  return (
    <TreeSelect
      dropdownClassName={styles.TreeSelect}
      multiple
      // multiple={props.notMultiple ? undefined : true}
      treeData={dataService.treeData}
      treeDefaultExpandAll
      treeCheckable={true}
      showCheckedStrategy={TreeSelect.SHOW_ALL}
      // treeCheckStrictly={true}
      value={props.form.getFieldValue('menuIdList')}
      onChange={onChange}
    />
  );
};

export default RoleTree;
