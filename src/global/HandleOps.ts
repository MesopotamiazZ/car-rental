import { message, Modal } from "antd";
import NamespaceEnum from "@/constants/NamespaceEnum";
import { create, update, remove, removeById, exportTable, createSys, updateSys, removeSys, removeByIdSys, removeSysById } from "./CommonService";
import { ApiResponse } from "./ApiResponse";
import ResponseCodeEnum from "@/constants/ResponseCodeEnum";
import OperationEnum from "@/constants/OperationEnum";
import { BaseEntity } from "./BaseEntity";
import { DateTimeToString } from './DateTimeUtils';
import OrderByEnum from "@/constants/OrderByEnum";

export async function handleAdd(fields: BaseEntity, namespace: NamespaceEnum) {
  const hide = message.loading('正在添加');
  try {
    DateTimeToString(fields)
    let res = await create(fields, namespace);
    // console.log("fields="+JSON.stringify(fields))
    hide();

    return handleResponse(res, OperationEnum.ADD);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.ADD)
  }
};

export async function handleAddSys(fields: BaseEntity, namespace: NamespaceEnum) {
  const hide = message.loading('正在添加');
  try {
    DateTimeToString(fields)
    let res = await createSys(fields, namespace);
    // console.log("fields="+JSON.stringify(fields))
    hide();

    return handleResponse(res, OperationEnum.ADD);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.ADD)
  }
};

export async function handleAccessCoupon(fields: BaseEntity, namespace: NamespaceEnum) {
  const hide = message.loading('正在添加');
  try {
    DateTimeToString(fields)
    let res = await create(fields, namespace);
    // console.log("fields="+JSON.stringify(fields))
    hide();

    return handleResponse(res, OperationEnum.ADD);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.ADD)
  }
};
export async function handleAccessCouponSys(fields: BaseEntity, namespace: NamespaceEnum) {
  const hide = message.loading('正在添加');
  try {
    DateTimeToString(fields)
    let res = await createSys(fields, namespace);
    // console.log("fields="+JSON.stringify(fields))
    hide();

    return handleResponse(res, OperationEnum.ADD);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.ADD)
  }
};

/**
 * 更新节点
 * @param fields
 */
export async function handleUpdate(fields: BaseEntity, namespace: NamespaceEnum,) {
  const hide = message.loading('正在更新');
  DateTimeToString(fields);
  try {
    //过滤所有null
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        let element = fields[key];
        if (element === null) {
          fields[key] = undefined
        }

      }
    }


    let res: ApiResponse = await update(
      {
        ...fields,
      },
      namespace,
    );
    hide();
    return handleResponse(res, OperationEnum.UPDATE);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.UPDATE)
  }
};

export async function handleUpdateSys(fields: BaseEntity, namespace: NamespaceEnum,) {
  const hide = message.loading('正在更新');
  DateTimeToString(fields);

  let newParams: any = {};

  for (const key in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, key)) {

      if (Boolean(fields[key]) || fields[key] === 0 || fields[key] === 1) {
        newParams[key] = fields[key];
      }
    }
  }



  try {
    let res: ApiResponse = await updateSys(
      {
        ...newParams,
      },
      namespace,
    );
    hide();
    return handleResponse(res, OperationEnum.UPDATE);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.UPDATE)
  }
};

/**
 * 导出
 * @param fields
 */
export async function handleExport(namespace: NamespaceEnum, records?: number[]) {
  const hide = message.loading('正在导出');
  try {
    let res: ApiResponse = await exportTable(
      namespace, records,
    );
    hide();
    return handleResponse(res, OperationEnum.EXPORT);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.EXPORT)
  }
};

/**
 *  删除节点
 * @param selectedRows
 */
export async function handleRemove(records: number[], actionRef: any, namespace: NamespaceEnum) {
  const userNameHtml = '您确定要删除?';
  Modal.confirm({
    title: userNameHtml,
    content: '一但删除，数据将无法恢复，请慎重操作',
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    onOk: async () => {
      await removeRecords(records, namespace);
      actionRef.current && actionRef.current.reload();
    },
    onCancel() {
    }
  })
};

/**
 *  删除节点
 * @param selectedRows
 */
export async function handleRemoveSys(records: number[], actionRef: any, namespace: NamespaceEnum) {
  const userNameHtml = '您确定要删除?';
  Modal.confirm({
    title: userNameHtml,
    content: '一但删除，数据将无法恢复，请慎重操作',
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    onOk: async () => {
      await removeRecordsSys(records, namespace);
      actionRef.current && actionRef.current.reload();
    },
    onCancel() {
    }
  })
};

export async function handleRemoveSysById(records: number[], actionRef: any, namespace: NamespaceEnum) {
  const userNameHtml = '您确定要删除?';
  Modal.confirm({
    title: userNameHtml,
    content: '一但删除，数据将无法恢复，请慎重操作',
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    onOk: async () => {
      await removeRecordsSysById(records, namespace);
      actionRef.current && actionRef.current.reload();
    },
    onCancel() {
    }
  })
};




export async function cancelConfirm(isFieldsChange: boolean, onCancel: () => void) {
  if (!isFieldsChange) onCancel();
  else {
    const userNameHtml = '请确认取消';
    Modal.confirm({
      title: userNameHtml,
      content: '您有修改，确认要放弃',
      okText: '确定取消',
      okType: 'danger',
      cancelText: '不取消',
      onOk: () => {
        onCancel()
      },
      onCancel() {
      }
    })
  }

};



async function removeRecords(selectedIds: number[] | undefined, namespace: NamespaceEnum) {
  const hide = message.loading('正在删除');
  if (!selectedIds) return true;
  try {
    let res;
    // if (selectedIds.length == 1) {
    //   res = await removeById(
    //     selectedIds[0],
    //     namespace
    //   );
    // }
    // else {
    //   res = await remove(
    //     selectedIds,
    //     namespace
    //   );
    // }
    res = await remove(
      selectedIds,
      namespace
    );
    hide();
    return handleResponse(res, OperationEnum.REMOVE);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.REMOVE)
  }
};




async function removeRecordsSysById(selectedIds: number[] | undefined, namespace: NamespaceEnum) {
  const hide = message.loading('正在删除');
  if (!selectedIds) return true;
  try {
    let res;
    if (selectedIds.length == 1) {
      res = await removeByIdSys(
        selectedIds[0],
        namespace
      );
    }
    else {
      res = await removeSysById(
        selectedIds,
        namespace
      );
    }


    hide();
    return handleResponse(res, OperationEnum.REMOVE);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.REMOVE)
  }
};


async function removeRecordsSys(selectedIds: number[] | undefined, namespace: NamespaceEnum) {
  const hide = message.loading('正在删除');
  if (!selectedIds) return true;
  try {
    let res;

    if(selectedIds.length === 1){
      res = await removeSysById(
        selectedIds,
        namespace
      );
    }else{
      res = await removeSys(
        selectedIds,
        namespace
      );
    }

   


    hide();
    return handleResponse(res, OperationEnum.REMOVE);
  } catch (error) {
    hide();
    return errorMessage(OperationEnum.REMOVE)
  }
};


function handleResponse(res: ApiResponse, ops: OperationEnum) {
  // console.log(res)
  if (res && res.code === ResponseCodeEnum.SUCCESS) {
    // message.success(`${ops}成功，即将刷新`) 
    message.success(`${res.msg}`)
    return true;
  } else {
    // return errorMessage(ops);
    let a: any = res.msg ? res.msg : ops + '失败，请重试'
    message.error(`${a}`)
    return false;
  }
}

function errorMessage(ops: OperationEnum) {
  message.error(`${ops} 失败，请重试`);
  return false;
}



export function getOrderBy(orderBy: string): OrderByEnum {

  if (orderBy === 'ascend') {
    return OrderByEnum.ASC;
  } else {
    return OrderByEnum.DESC;
  }
}