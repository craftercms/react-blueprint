import { parseDescriptor, getItem } from '@craftercms/content';
import { Item } from '@craftercms/models';
import { map } from 'rxjs';

export function getModel(path = '/site/website/index.xml') {
  return getItem(path, { flatten: true }).pipe(
    map((item: Item) => parseDescriptor(item.descriptorDom))
  );
}
