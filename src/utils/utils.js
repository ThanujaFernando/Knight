import _ from 'lodash';

const isIndexInPath = (arr, search) => {
  for (let i=0; i<arr.length; i++){
    if (_.isEqual(arr[i], search)){
      return true;
    }
  }
}

export default isIndexInPath;