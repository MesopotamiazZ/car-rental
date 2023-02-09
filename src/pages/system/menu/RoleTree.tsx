import React, { Key } from 'react';
import request from '../../../api/base/request';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { TreeSelect } from 'antd';
import { MenuType } from './data';

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
        console.log("sMenu/list/tree",data);
        const treeData: any = [];
        // data.menuList.unshift({
        //   name: "顶级菜单",
        //   menuId:0,
        //   parentId: 9999,
        // })
        (data.menuList || [])
          .filter((item: MenuType) => !item.parentId)
          .forEach((element: MenuType) => {

            const nowList = treeList(element);
            // console.log("nowList",nowList);
            // alert(nowList.length);
            treeData.push(nowList);
          });
        console.log('treeData', treeData)
        setResult({ treeData: treeData });
      })
      .catch((error) => setResult({ treeData: [] }));
  }, []);

  function treeList(element: MenuType) {
    let newObj: treeData = {};
    newObj['title'] = element.name;
    newObj['key'] = element.menuId;
    newObj['value'] = element.menuId;
    newObj['label'] = element.name;
    if (element['children']) {
      let newChildren: treeData[] = [];
      element['children'].forEach((item: MenuType) => {
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
  const onChange = (checkedKeys: any, info: {}) => {
    console.log('onChange', checkedKeys, info);
    checkedKeys = checkedKeys.map((k) => {
      return k.value;
    });
    console.log(checkedKeys, 'checkedKeys')
    if (props.onChange && checkedKeys[checkedKeys.length - 1]) {
      props.onChange(checkedKeys[checkedKeys.length - 1]);
    }
  };

  const dataService = useMenuTreeDataService();
  //console.log(dataService);

  return (
    <TreeSelect
      dropdownClassName={styles.TreeSelect}
      allowClear
      // multiple={props.notMultiple ? undefined : true}
      treeData={dataService.treeData}
      treeDefaultExpandAll
      // treeCheckable={true}
      showCheckedStrategy={TreeSelect.SHOW_ALL}
      treeCheckStrictly={true}
      value={props.form.getFieldValue('parentId')}
      onChange={onChange}
    />
  );
};

export default RoleTree;
