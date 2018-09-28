/**
 * Stores a variable under this user's storage, with optional expiry
 * @title Set user variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 * @param {any} value - Set the value of the variable
 * @param {string} [expiry=never] - Set the expiry of the data, can be "never" or a short string like "6 hours"
 */
const setUserVariable = async (name, value, expiry) => {
  const userId = event.target
  const key = bp.kvs.getUserStorageKey(userId, name)
  await bp.kvs.setStorageWithExpiry(event.botId, key, value, expiry)
  return { ...state }
}

setUserVariable(args.name, args.value, args.expiry)
