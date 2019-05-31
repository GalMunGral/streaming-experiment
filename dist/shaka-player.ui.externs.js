/**
 * @fileoverview Generated externs.  DO NOT EDIT!
 * @externs
 * @suppress {duplicate} To prevent compiler errors with the
 *   namespace being declared both here and by goog.provide in the
 *   library.
 */

/** @namespace */
window.shaka = {};
/** @const */
shaka.abr = {};
/** @const */
shaka.cast = {};
/** @const */
shaka.dash = {};
/** @const */
shaka.hls = {};
/** @const */
shaka.media = {};
/** @const */
shaka.media.ManifestParser = {};
/** @const */
shaka.net = {};
/** @const */
shaka.offline = {};
/** @const */
shaka.text = {};
/** @const */
shaka.util = {};
/** @const */
shaka.ui = {};

/**
 * @summary A work-alike for EventTarget.  Only DOM elements may be true
 * EventTargets, but this can be used as a base class to provide event dispatch
 * to non-DOM classes.  Only FakeEvents should be dispatched.
 * @implements {EventTarget}
 */
shaka.util.FakeEventTarget = class {
  constructor() {}
  /**
   * Add an event listener to this object.
   * @param {string} type The event type to listen for.
   * @param {shaka.util.FakeEventTarget.ListenerType} listener The callback or
   *   listener object to invoke.
   * @param {(!AddEventListenerOptions|boolean)=} options Ignored.
   * @override
   */
  addEventListener(type,listener,options) {}
  /**
   * Remove an event listener from this object.
   * @param {string} type The event type for which you wish to remove a
   *   listener.
   * @param {shaka.util.FakeEventTarget.ListenerType} listener The callback or
   *   listener object to remove.
   * @param {(EventListenerOptions|boolean)=} options Ignored.
   * @override
   */
  removeEventListener(type,listener,options) {}
  /**
   * Dispatch an event from this object.
   * @param {!Event} event The event to be dispatched from this object.
   * @return {boolean} True if the default action was prevented.
   * @override
   */
  dispatchEvent(event) {}
};
/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):*}
 */
shaka.util.FakeEventTarget.ListenerType;
/**
 * Localization system provided by the shaka ui library.
 * It can be used to store the various localized forms of
 * strings that are expected to be displayed to the user.
 * If a string is not available, it will return the localized
 * form in the closest related locale.
 * @implements {EventTarget}
 * @final
 */
shaka.ui.Localization = class {
  /**
   * @param {string} fallbackLocale
   *    The fallback locale that should be used. It will be assumed that this
   *    locale should have entries for just about every request.
   */
  constructor(fallbackLocale) {}
  /**
   * @override
   */
  addEventListener(type,listener,options) {}
  /**
   * @override
   */
  removeEventListener(type,listener,options) {}
  /**
   * @override
   */
  dispatchEvent(event) {}
  /**
   * Request the localization system to change which locale it serves. If any of
   * of the preferred locales cannot be found, the localization system will fire
   * an event identifying which locales it does not know. The localization
   * system will then continue to operate using the closest matches it has.
   * @param {!Iterable.<string>} locales
   *    The locale codes for the requested locales in order of preference.
   */
  changeLocale(locales) {}
  /**
   * Insert a set of localizations for a single locale. This will amend the
   * existing localizations for the given locale.
   * @param {string} locale
   *   The locale that the localizations should be added to.
   * @param {!Map.<string, string>} localizations
   *   A mapping of id to localized text that should used to modify the internal
   *   collection of localizations.
   * @param {shaka.ui.Localization.ConflictResolution=} conflictResolution
   *   The strategy used to resolve conflicts when the id of an existing entry
   *   matches the id of a new entry. Default to |USE_NEW|, where the new
   *   entry will replace the old entry.
   * @return {!shaka.ui.Localization}
   *   Returns |this| so that calls can be chained.
   */
  insert(locale,localizations,conflictResolution) {}
  /**
   * Set the value under each key in |dictionary| to the resolved value.
   * Convenient for apps with some kind of data binding system.
   * Equivalent to:
   *    for (const key of dictionary.keys()) {
   *      dictionary.set(key, localization.resolve(key));
   *    }
   * @param {!Map.<string, string>} dictionary
   */
  resolveDictionary(dictionary) {}
  /**
   * Request the localized string under the given id. If there is no localized
   * version of the string, then the fallback localization will be given
   * ("en" version). If there is no fallback localization, a non-null empty
   * string will be returned.
   * @param {string} id The id for the localization entry.
   * @return {string}
   */
  resolve(id) {}
};
/**
 * An enum for how the localization system should resolve conflicts between old
 * translations and new translations.
 * @enum {number}
 */
shaka.ui.Localization.ConflictResolution = {
  'USE_OLD': 0,
  'USE_NEW': 1
};
/**
 * The event name for when locales were requested, but we could not find any
 * entries for them. The localization system will continue to use the closest
 * matches it has.
 * @const {string}
 */
shaka.ui.Localization.UNKNOWN_LOCALES;
/**
 * The event name for when an entry could not be found in the preferred locale,
 * related locales, or the fallback locale.
 * @const {string}
 */
shaka.ui.Localization.UNKNOWN_LOCALIZATION;
/**
 * The event name for when entries are missing from the user's preferred
 * locale, but we were able to find an entry in a related locale or the fallback
 * locale.
 * @const {string}
 */
shaka.ui.Localization.MISSING_LOCALIZATIONS;
/**
 * The event name for when a new locale has been requested and any previously
 * resolved values should be updated.
 * @const {string}
 */
shaka.ui.Localization.LOCALE_CHANGED;
/**
 * The event name for when |insert| was called and it changed entries that could
 * affect previously resolved values.
 * @const {string}
 */
shaka.ui.Localization.LOCALE_UPDATED;
/**
 * A timer allows a single function to be executed at a later time or at
 * regular intervals.
 * @final
 */
shaka.util.Timer = class {
  /**
   * Create a new timer. A timer is committed to a single callback function.
   * While there is no technical reason to do this, it is far easier to
   * understand and use timers when they are connected to one functional idea.
   * @param {function()} onTick
   */
  constructor(onTick) {}
  /**
   * Have the timer call |onTick| now.
   * @return {!shaka.util.Timer}
   */
  tickNow() {}
  /**
   * Have the timer call |onTick| after |seconds| has elapsed unless |stop| is
   * called first.
   * @param {number} seconds
   * @return {!shaka.util.Timer}
   */
  tickAfter(seconds) {}
  /**
   * Have the timer call |onTick| every |seconds| until |stop| is called.
   * @param {number} seconds
   * @return {!shaka.util.Timer}
   */
  tickEvery(seconds) {}
  /**
   * Stop the timer and clear the previous behaviour. The timer is still usable
   * after calling |stop|.
   */
  stop() {}
};
/**
 * @implements {shaka.extern.Error}
 * @extends {Error}
 */
shaka.util.Error = class {
  /**
   * @param {shaka.util.Error.Severity} severity
   * @param {shaka.util.Error.Category} category
   * @param {shaka.util.Error.Code} code
   * @param {...*} varArgs
   */
  constructor(severity,category,code,...varArgs) {}
};
/**
     * @override
     */
shaka.util.Error.prototype.severity;
/**
     * @override
     */
shaka.util.Error.prototype.category;
/**
     * @override
     */
shaka.util.Error.prototype.code;
/**
     * @override
     */
shaka.util.Error.prototype.data;
/**
     * @override
     */
shaka.util.Error.prototype.handled;
/**
 * @enum {number}
 */
shaka.util.Error.Severity = {
  'RECOVERABLE': 1,
  'CRITICAL': 2
};
/**
 * @enum {number}
 */
shaka.util.Error.Category = {
  'NETWORK': 1,
  'TEXT': 2,
  'MEDIA': 3,
  'MANIFEST': 4,
  'STREAMING': 5,
  'DRM': 6,
  'PLAYER': 7,
  'CAST': 8,
  'STORAGE': 9
};
/**
 * @enum {number}
 */
shaka.util.Error.Code = {
  'UNSUPPORTED_SCHEME': 1000,
  'BAD_HTTP_STATUS': 1001,
  'HTTP_ERROR': 1002,
  'TIMEOUT': 1003,
  'MALFORMED_DATA_URI': 1004,
  'UNKNOWN_DATA_URI_ENCODING': 1005,
  'REQUEST_FILTER_ERROR': 1006,
  'RESPONSE_FILTER_ERROR': 1007,
  'MALFORMED_TEST_URI': 1008,
  'UNEXPECTED_TEST_REQUEST': 1009,
  'ATTEMPTS_EXHAUSTED': 1010,
  'INVALID_TEXT_HEADER': 2000,
  'INVALID_TEXT_CUE': 2001,
  'UNABLE_TO_DETECT_ENCODING': 2003,
  'BAD_ENCODING': 2004,
  'INVALID_XML': 2005,
  'INVALID_MP4_TTML': 2007,
  'INVALID_MP4_VTT': 2008,
  'UNABLE_TO_EXTRACT_CUE_START_TIME': 2009,
  'BUFFER_READ_OUT_OF_BOUNDS': 3000,
  'JS_INTEGER_OVERFLOW': 3001,
  'EBML_OVERFLOW': 3002,
  'EBML_BAD_FLOATING_POINT_SIZE': 3003,
  'MP4_SIDX_WRONG_BOX_TYPE': 3004,
  'MP4_SIDX_INVALID_TIMESCALE': 3005,
  'MP4_SIDX_TYPE_NOT_SUPPORTED': 3006,
  'WEBM_CUES_ELEMENT_MISSING': 3007,
  'WEBM_EBML_HEADER_ELEMENT_MISSING': 3008,
  'WEBM_SEGMENT_ELEMENT_MISSING': 3009,
  'WEBM_INFO_ELEMENT_MISSING': 3010,
  'WEBM_DURATION_ELEMENT_MISSING': 3011,
  'WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING': 3012,
  'WEBM_CUE_TIME_ELEMENT_MISSING': 3013,
  'MEDIA_SOURCE_OPERATION_FAILED': 3014,
  'MEDIA_SOURCE_OPERATION_THREW': 3015,
  'VIDEO_ERROR': 3016,
  'QUOTA_EXCEEDED_ERROR': 3017,
  'TRANSMUXING_FAILED': 3018,
  'UNABLE_TO_GUESS_MANIFEST_TYPE': 4000,
  'DASH_INVALID_XML': 4001,
  'DASH_NO_SEGMENT_INFO': 4002,
  'DASH_EMPTY_ADAPTATION_SET': 4003,
  'DASH_EMPTY_PERIOD': 4004,
  'DASH_WEBM_MISSING_INIT': 4005,
  'DASH_UNSUPPORTED_CONTAINER': 4006,
  'DASH_PSSH_BAD_ENCODING': 4007,
  'DASH_NO_COMMON_KEY_SYSTEM': 4008,
  'DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED': 4009,
  'DASH_CONFLICTING_KEY_IDS': 4010,
  'UNPLAYABLE_PERIOD': 4011,
  'RESTRICTIONS_CANNOT_BE_MET': 4012,
  'NO_PERIODS': 4014,
  'HLS_PLAYLIST_HEADER_MISSING': 4015,
  'INVALID_HLS_TAG': 4016,
  'HLS_INVALID_PLAYLIST_HIERARCHY': 4017,
  'DASH_DUPLICATE_REPRESENTATION_ID': 4018,
  'HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND': 4020,
  'HLS_COULD_NOT_GUESS_MIME_TYPE': 4021,
  'HLS_MASTER_PLAYLIST_NOT_PROVIDED': 4022,
  'HLS_REQUIRED_ATTRIBUTE_MISSING': 4023,
  'HLS_REQUIRED_TAG_MISSING': 4024,
  'HLS_COULD_NOT_GUESS_CODECS': 4025,
  'HLS_KEYFORMATS_NOT_SUPPORTED': 4026,
  'DASH_UNSUPPORTED_XLINK_ACTUATE': 4027,
  'DASH_XLINK_DEPTH_LIMIT': 4028,
  'HLS_COULD_NOT_PARSE_SEGMENT_START_TIME': 4030,
  'CONTENT_UNSUPPORTED_BY_BROWSER': 4032,
  'CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM': 4033,
  'HLS_AES_128_ENCRYPTION_NOT_SUPPORTED': 4034,
  'INVALID_STREAMS_CHOSEN': 5005,
  'NO_RECOGNIZED_KEY_SYSTEMS': 6000,
  'REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE': 6001,
  'FAILED_TO_CREATE_CDM': 6002,
  'FAILED_TO_ATTACH_TO_VIDEO': 6003,
  'INVALID_SERVER_CERTIFICATE': 6004,
  'FAILED_TO_CREATE_SESSION': 6005,
  'FAILED_TO_GENERATE_LICENSE_REQUEST': 6006,
  'LICENSE_REQUEST_FAILED': 6007,
  'LICENSE_RESPONSE_REJECTED': 6008,
  'ENCRYPTED_CONTENT_WITHOUT_DRM_INFO': 6010,
  'NO_LICENSE_SERVER_GIVEN': 6012,
  'OFFLINE_SESSION_REMOVED': 6013,
  'EXPIRED': 6014,
  'LOAD_INTERRUPTED': 7000,
  'OPERATION_ABORTED': 7001,
  'NO_VIDEO_ELEMENT': 7002,
  'CAST_API_UNAVAILABLE': 8000,
  'NO_CAST_RECEIVERS': 8001,
  'ALREADY_CASTING': 8002,
  'UNEXPECTED_CAST_ERROR': 8003,
  'CAST_CANCELED_BY_USER': 8004,
  'CAST_CONNECTION_TIMED_OUT': 8005,
  'CAST_RECEIVER_APP_UNAVAILABLE': 8006,
  'STORAGE_NOT_SUPPORTED': 9000,
  'INDEXED_DB_ERROR': 9001,
  'DEPRECATED_OPERATION_ABORTED': 9002,
  'REQUESTED_ITEM_NOT_FOUND': 9003,
  'MALFORMED_OFFLINE_URI': 9004,
  'CANNOT_STORE_LIVE_OFFLINE': 9005,
  'STORE_ALREADY_IN_PROGRESS': 9006,
  'NO_INIT_DATA_FOR_OFFLINE': 9007,
  'LOCAL_PLAYER_INSTANCE_REQUIRED': 9008,
  'NEW_KEY_OPERATION_NOT_SUPPORTED': 9011,
  'KEY_NOT_FOUND': 9012,
  'MISSING_STORAGE_CELL': 9013
};
/**
 * A utility to wrap abortable operations.  Note that these are not cancelable.
 * Cancelation implies undoing what has been done so far, whereas aborting only
 * means that futher work is stopped.
 * @implements {shaka.extern.IAbortableOperation.<T>}
 * @template T
 */
shaka.util.AbortableOperation = class {
  /**
   * @param {!Promise.<T>} promise
   *   A Promise which represents the underlying operation.  It is resolved when
   *   the operation is complete, and rejected if the operation fails or is
   *   aborted.  Aborted operations should be rejected with a shaka.util.Error
   *   object using the error code OPERATION_ABORTED.
   * @param {function():!Promise} onAbort
   *   Will be called by this object to abort the underlying operation.
   *   This is not cancelation, and will not necessarily result in any work
   *   being undone.  abort() should return a Promise which is resolved when the
   *   underlying operation has been aborted.  The returned Promise should never
   *   be rejected.
   */
  constructor(promise,onAbort) {}
  /**
   * @param {!shaka.util.Error} error
   * @return {!shaka.util.AbortableOperation} An operation which has already
   *   failed with the error given by the caller.
   */
  static failed(error) {}
  /**
   * @return {!shaka.util.AbortableOperation} An operation which has already
   *   failed with the error OPERATION_ABORTED.
   */
  static aborted() {}
  /**
   * @param {U} value
   * @return {!shaka.util.AbortableOperation.<U>} An operation which has already
   *   completed with the given value.
   * @template U
   */
  static completed(value) {}
  /**
   * @param {!Promise.<U>} promise
   * @return {!shaka.util.AbortableOperation.<U>} An operation which cannot be
   *   aborted.  It will be completed when the given Promise is resolved, or
   *   will be failed when the given Promise is rejected.
   * @template U
   */
  static notAbortable(promise) {}
  /**
   * @override
   */
  abort() {}
  /**
   * @param {!Array.<!shaka.util.AbortableOperation>} operations
   * @return {!shaka.util.AbortableOperation} An operation which is resolved
   *   when all operations are successful and fails when any operation fails.
   *   For this operation, abort() aborts all given operations.
   */
  static all(operations) {}
  /**
   * @override
   */
  finally(onFinal) {}
  /**
   * @param {(undefined|
   *          function(T):U|
   *          function(T):!Promise.<U>|
   *          function(T):!shaka.util.AbortableOperation.<U>)} onSuccess
   *   A callback to be invoked after this operation is complete, to chain to
   *   another operation.  The callback can return a plain value, a Promise to
   *   an asynchronous value, or another AbortableOperation.
   * @param {function(*)=} onError
   *   An optional callback to be invoked if this operation fails, to perform
   *   some cleanup or error handling.  Analogous to the second parameter of
   *   Promise.prototype.then.
   * @return {!shaka.util.AbortableOperation.<U>} An operation which is resolved
   *   when this operation and the operation started by the callback are both
   *   complete.
   * @template U
   */
  chain(onSuccess,onError) {}
};
/**
 * @const {!Promise.<T>}
 */
shaka.util.AbortableOperation.prototype.promise;
/**
 * An interface to standardize how objects are destroyed.
 * @interface
 */
shaka.util.IDestroyable = class {
  /**
   * Request that this object be destroyed, releasing all resources and shutting
   * down all operations. Returns a Promise which is resolved when destruction
   * is complete. This Promise should never be rejected.
   * @return {!Promise}
   */
  destroy() {}
};
/**
 * NetworkingEngine wraps all networking operations.  This accepts plugins that
 * handle the actual request.  A plugin is registered using registerScheme.
 * Each scheme has at most one plugin to handle the request.
 * @implements {shaka.util.IDestroyable}
 */
shaka.net.NetworkingEngine = class extends shaka.util.FakeEventTarget {
  /**
   * @param {function(number, number)=} onProgressUpdated Called when a progress
   *   event is triggered. Passed the duration, in milliseconds, that the
   *   request took, and the number of bytes transferred.
   */
  constructor(onProgressUpdated) {}
  /**
   * Registers a scheme plugin.  This plugin will handle all requests with the
   * given scheme.  If a plugin with the same scheme already exists, it is
   * replaced, unless the existing plugin is of higher priority.
   * If no priority is provided, this defaults to the highest priority of
   * APPLICATION.
   * @param {string} scheme
   * @param {shaka.extern.SchemePlugin} plugin
   * @param {number=} priority
   */
  static registerScheme(scheme,plugin,priority) {}
  /**
   * Removes a scheme plugin.
   * @param {string} scheme
   */
  static unregisterScheme(scheme) {}
  /**
   * Registers a new request filter.  All filters are applied in the order they
   * are registered.
   * @param {shaka.extern.RequestFilter} filter
   */
  registerRequestFilter(filter) {}
  /**
   * Removes a request filter.
   * @param {shaka.extern.RequestFilter} filter
   */
  unregisterRequestFilter(filter) {}
  /**
   * Clears all request filters.
   */
  clearAllRequestFilters() {}
  /**
   * Registers a new response filter.  All filters are applied in the order they
   * are registered.
   * @param {shaka.extern.ResponseFilter} filter
   */
  registerResponseFilter(filter) {}
  /**
   * Removes a response filter.
   * @param {shaka.extern.ResponseFilter} filter
   */
  unregisterResponseFilter(filter) {}
  /**
   * Clears all response filters.
   */
  clearAllResponseFilters() {}
  /**
   * @override
   */
  destroy() {}
  /**
   * Makes a network request and returns the resulting data.
   * @param {shaka.net.NetworkingEngine.RequestType} type
   * @param {shaka.extern.Request} request
   * @return {!shaka.net.NetworkingEngine.PendingRequest}
   */
  request(type,request) {}
};
/**
 * A wrapper class for the number of bytes remaining to be downloaded for the
 * request.
 * Instead of using PendingRequest directly, this class is needed to be sent to
 * plugin as a parameter, and a Promise is returned, before PendingRequest is
 * created.
 */
shaka.net.NetworkingEngine.NumBytesRemainingClass = class {
  /**
   * Constructor
   */
  constructor() {}
};
/**
 * A pending network request. This can track the current progress of the
 * download, and allows the request to be aborted if the network is slow.
 * @implements {shaka.extern.IAbortableOperation.<shaka.extern.Response>}
 * @extends {shaka.util.AbortableOperation}
 */
shaka.net.NetworkingEngine.PendingRequest = class extends shaka.util.AbortableOperation {
  /**
       * @param {!Promise} promise
       *   A Promise which represents the underlying operation.  It is resolved
       *   when the operation is complete, and rejected if the operation fails
       *   or is aborted.  Aborted operations should be rejected with a
       *   shaka.util.Error object using the error code OPERATION_ABORTED.
       * @param {function():!Promise} onAbort
       *   Will be called by this object to abort the underlying operation.
       *   This is not cancelation, and will not necessarily result in any work
       *   being undone.  abort() should return a Promise which is resolved when
       *   the underlying operation has been aborted.  The returned Promise
       *   should never be rejected.
       * @param {shaka.net.NetworkingEngine.NumBytesRemainingClass}
       *   numBytesRemainingObj
       */
  constructor(promise,onAbort,numBytesRemainingObj) {}
};
/**
 * Request types.  Allows a filter to decide which requests to read/alter.
 * @enum {number}
 */
shaka.net.NetworkingEngine.RequestType = {
  'MANIFEST': 0,
  'SEGMENT': 1,
  'LICENSE': 2,
  'APP': 3,
  'TIMING': 4
};
/**
 * Priority level for network scheme plugins.
 * If multiple plugins are provided for the same scheme, only the
 * highest-priority one is used.
 * @enum {number}
 */
shaka.net.NetworkingEngine.PluginPriority = {
  'FALLBACK': 1,
  'PREFERRED': 2,
  'APPLICATION': 3
};
/**
 * @implements {shaka.extern.Cue}
 */
shaka.text.Cue = class {
  /**
   * @param {number} startTime
   * @param {number} endTime
   * @param {string} payload
   */
  constructor(startTime,endTime,payload) {}
};
/**
     * @override
     */
shaka.text.Cue.prototype.startTime;
/**
     * @override
     */
shaka.text.Cue.prototype.direction;
/**
     * @override
     */
shaka.text.Cue.prototype.endTime;
/**
     * @override
     */
shaka.text.Cue.prototype.payload;
/**
     * @override
     */
shaka.text.Cue.prototype.region;
/**
     * @override
     */
shaka.text.Cue.prototype.position;
/**
     * @override
     */
shaka.text.Cue.prototype.positionAlign;
/**
     * @override
     */
shaka.text.Cue.prototype.size;
/**
     * @override
     */
shaka.text.Cue.prototype.textAlign;
/**
     * @override
     */
shaka.text.Cue.prototype.writingMode;
/**
     * @override
     */
shaka.text.Cue.prototype.lineInterpretation;
/**
     * @override
     */
shaka.text.Cue.prototype.line;
/**
     * @override
     */
shaka.text.Cue.prototype.lineHeight;
/**
     * Line Alignment is set to start by default.
     * @override
     */
shaka.text.Cue.prototype.lineAlign;
/**
     * Set the captions at the bottom of the text container by default.
     * @override
     */
shaka.text.Cue.prototype.displayAlign;
/**
     * @override
     */
shaka.text.Cue.prototype.color;
/**
     * @override
     */
shaka.text.Cue.prototype.backgroundColor;
/**
     * @override
     */
shaka.text.Cue.prototype.backgroundImage;
/**
     * @override
     */
shaka.text.Cue.prototype.fontSize;
/**
     * @override
     */
shaka.text.Cue.prototype.fontWeight;
/**
     * @override
     */
shaka.text.Cue.prototype.fontStyle;
/**
     * @override
     */
shaka.text.Cue.prototype.fontFamily;
/**
     * @override
     */
shaka.text.Cue.prototype.textDecoration;
/**
     * @override
     */
shaka.text.Cue.prototype.wrapLine;
/**
     * @override
     */
shaka.text.Cue.prototype.id;
/**
 * @enum {string}
 */
shaka.text.Cue.positionAlign = {
  'LEFT': 'line-left',
  'RIGHT': 'line-right',
  'CENTER': 'center',
  'AUTO': 'auto'
};
/**
 * @enum {string}
 */
shaka.text.Cue.textAlign = {
  'LEFT': 'left',
  'RIGHT': 'right',
  'CENTER': 'center',
  'START': 'start',
  'END': 'end'
};
/**
 * Vertical alignments of the cues within their extents.
 * 'BEFORE' means displaying at the top of the captions container box, 'CENTER'
 *  means in the middle, 'BOTTOM' means at the bottom.
 * @enum {string}
 */
shaka.text.Cue.displayAlign = {
  'BEFORE': 'before',
  'CENTER': 'center',
  'AFTER': 'after'
};
/**
 * @enum {string}
 */
shaka.text.Cue.direction = {
  'HORIZONTAL_LEFT_TO_RIGHT': 'ltr',
  'HORIZONTAL_RIGHT_TO_LEFT': 'rtl'
};
/**
 * @enum {string}
 */
shaka.text.Cue.writingMode = {
  'HORIZONTAL_TOP_TO_BOTTOM': 'horizontal-tb',
  'VERTICAL_LEFT_TO_RIGHT': 'vertical-lr',
  'VERTICAL_RIGHT_TO_LEFT': 'vertical-rl'
};
/**
 * @enum {number}
 */
shaka.text.Cue.lineInterpretation = {
  'LINE_NUMBER': 0,
  'PERCENTAGE': 1
};
/**
 * @enum {string}
 */
shaka.text.Cue.lineAlign = {
  'CENTER': 'center',
  'START': 'start',
  'END': 'end'
};
/**
 * In CSS font weight can be a number, where 400 is normal and 700 is bold.
 * Use these values for the enum for consistency.
 * @enum {number}
 */
shaka.text.Cue.fontWeight = {
  'NORMAL': 400,
  'BOLD': 700
};
/**
 * @enum {string}
 */
shaka.text.Cue.fontStyle = {
  'NORMAL': 'normal',
  'ITALIC': 'italic',
  'OBLIQUE': 'oblique'
};
/**
 * @enum {string}
 */
shaka.text.Cue.textDecoration = {
  'UNDERLINE': 'underline',
  'LINE_THROUGH': 'lineThrough',
  'OVERLINE': 'overline'
};
/**
 * @implements {shaka.extern.CueRegion}
 * @struct
 */
shaka.text.CueRegion = class {
  constructor() {}
};
/**
     * @override
     */
shaka.text.CueRegion.prototype.id;
/**
     * @override
     */
shaka.text.CueRegion.prototype.viewportAnchorX;
/**
     * @override
     */
shaka.text.CueRegion.prototype.viewportAnchorY;
/**
     * @override
     */
shaka.text.CueRegion.prototype.regionAnchorX;
/**
     * @override
     */
shaka.text.CueRegion.prototype.regionAnchorY;
/**
     * @override
     */
shaka.text.CueRegion.prototype.width;
/**
     * @override
     */
shaka.text.CueRegion.prototype.height;
/**
     * @override
     */
shaka.text.CueRegion.prototype.heightUnits;
/**
     * @override
     */
shaka.text.CueRegion.prototype.widthUnits;
/**
     * @override
     */
shaka.text.CueRegion.prototype.viewportAnchorUnits;
/**
     * @override
     */
shaka.text.CueRegion.prototype.scroll;
/**
 * @enum {number}
 */
shaka.text.CueRegion.units = {
  'PX': 0,
  'PERCENTAGE': 1,
  'LINES': 2
};
/**
 * @enum {string}
 */
shaka.text.CueRegion.scrollMode = {
  'NONE': '',
  'UP': 'up'
};
/**
 * @summary
 * <p>
 * This defines the default ABR manager for the Player.  An instance of this
 * class is used when no ABR manager is given.
 * </p>
 * <p>
 * The behavior of this class is to take throughput samples using
 * segmentDownloaded to estimate the current network bandwidth.  Then it will
 * use that to choose the streams that best fit the current bandwidth.  It will
 * always pick the highest bandwidth variant it thinks can be played.
 * </p>
 * <p>
 * After initial choices are made, this class will call switchCallback() when
 * there is a better choice.  switchCallback() will not be called more than once
 * per ({@link shaka.abr.SimpleAbrManager.SWITCH_INTERVAL_MS}).
 * </p>
 * @implements {shaka.extern.AbrManager}
 */
shaka.abr.SimpleAbrManager = class {
  constructor() {}
  /**
   * @override
   */
  stop() {}
  /**
   * @override
   */
  init(switchCallback) {}
  /**
   * @override
   */
  chooseVariant() {}
  /**
   * @override
   */
  enable() {}
  /**
   * @override
   */
  disable() {}
  /**
   * @override
   */
  segmentDownloaded(deltaTimeMs,numBytes) {}
  /**
   * @override
   */
  getBandwidthEstimate() {}
  /**
   * @override
   */
  setVariants(variants) {}
  /**
   * @override
   */
  configure(config) {}
};
/**
 * @summary A proxy to switch between local and remote playback for Chromecast
 * in a way that is transparent to the app's controls.
 * @implements {shaka.util.IDestroyable}
 */
shaka.cast.CastProxy = class extends shaka.util.FakeEventTarget {
  /**
   * @param {!HTMLMediaElement} video The local video element associated with
   *   the local Player instance.
   * @param {!shaka.Player} player A local Player instance.
   * @param {string} receiverAppId The ID of the cast receiver application.
   *   If blank, casting will not be available, but the proxy will still
   *   function otherwise.
   */
  constructor(video,player,receiverAppId) {}
  /**
   * Destroys the proxy and the underlying local Player.
   * @param {boolean=} forceDisconnect If true, force the receiver app to shut
   *   down by disconnecting.  Does nothing if not connected.
   * @override
   */
  destroy(forceDisconnect) {}
  /**
   * Get a proxy for the video element that delegates to local and remote video
   * elements as appropriate.
   * @suppress {invalidCasts} to cast proxy Objects to unrelated types
   * @return {!HTMLMediaElement}
   */
  getVideo() {}
  /**
   * Get a proxy for the Player that delegates to local and remote Player
   * objects as appropriate.
   * @suppress {invalidCasts} to cast proxy Objects to unrelated types
   * @return {!shaka.Player}
   */
  getPlayer() {}
  /**
   * @return {boolean} True if the cast API is available and there are
   *   receivers.
   */
  canCast() {}
  /**
   * @return {boolean} True if we are currently casting.
   */
  isCasting() {}
  /**
   * @return {string} The name of the Cast receiver device, if isCasting().
   */
  receiverName() {}
  /**
   * @return {!Promise} Resolved when connected to a receiver.  Rejected if the
   *   connection fails or is canceled by the user.
   */
  cast() {}
  /**
   * Set application-specific data.
   * @param {Object} appData Application-specific data to relay to the receiver.
   */
  setAppData(appData) {}
  /**
   * Show a dialog where user can choose to disconnect from the cast connection.
   */
  suggestDisconnect() {}
  /**
   * Force the receiver app to shut down by disconnecting.
   */
  forceDisconnect() {}
};
/**
 * A receiver to communicate between the Chromecast-hosted player and the
 * sender application.
 * @implements {shaka.util.IDestroyable}
 */
shaka.cast.CastReceiver = class extends shaka.util.FakeEventTarget {
  /**
   * @param {!HTMLMediaElement} video The local video element associated with
   *   the local Player instance.
   * @param {!shaka.Player} player A local Player instance.
   * @param {function(Object)=} appDataCallback A callback to handle
   *   application-specific data passed from the sender.
   * @param {function(string):string=} contentIdCallback A callback to
   *   retrieve manifest URI from the provided content id.
   */
  constructor(video,player,appDataCallback,contentIdCallback) {}
  /**
   * @return {boolean} True if the cast API is available and there are
   *   receivers.
   */
  isConnected() {}
  /**
   * @return {boolean} True if the receiver is not currently doing loading or
   *   playing anything.
   */
  isIdle() {}
  /**
   * Destroys the underlying Player, then terminates the cast receiver app.
   * @override
   */
  destroy() {}
};
/**
 * Creates an InitSegmentReference, which provides the location to an
 * initialization segment.
 */
shaka.media.InitSegmentReference = class {
  /**
   * @param {function():!Array.<string>} uris A function that creates the URIs
   *   of the resource containing the segment.
   * @param {number} startByte The offset from the start of the resource to the
   *   start of the segment.
   * @param {?number} endByte The offset from the start of the resource to the
   *   end of the segment, inclusive.  A value of null indicates that the
   *   segment extends to the end of the resource.
   */
  constructor(uris,startByte,endByte) {}
  /**
   * Creates the URIs of the resource containing the segment.
   * @return {!Array.<string>}
   */
  createUris() {}
  /**
   * Returns the offset from the start of the resource to the
   * start of the segment.
   * @return {number}
   */
  getStartByte() {}
  /**
   * Returns the offset from the start of the resource to the end of the
   * segment, inclusive.  A value of null indicates that the segment extends
   * to the end of the resource.
   * @return {?number}
   */
  getEndByte() {}
};
/**
 * SegmentReference provides the start time, end time, and location to a media
 * segment.
 */
shaka.media.SegmentReference = class {
  /**
   * @param {number} position The segment's position within a particular Period.
   *   The following should hold true between any two SegmentReferences from the
   *   same Period, r1 and r2:
   *   IF r2.position > r1.position THEN
   *     [ (r2.startTime > r1.startTime) OR
   *       (r2.startTime == r1.startTime AND r2.endTime >= r1.endTime) ]
   * @param {number} startTime The segment's start time in seconds, relative to
   *   the start of a particular Period.
   * @param {number} endTime The segment's end time in seconds, relative to
   *   the start of a particular Period.  The segment ends the instant before
   *   this time, so |endTime| must be strictly greater than |startTime|.
   * @param {function():!Array.<string>} uris
   *   A function that creates the URIs of the resource containing the segment.
   * @param {number} startByte The offset from the start of the resource to the
   *   start of the segment.
   * @param {?number} endByte The offset from the start of the resource to the
   *   end of the segment, inclusive.  A value of null indicates that the
   *   segment extends to the end of the resource.
   */
  constructor(position,startTime,endTime,uris,startByte,endByte) {}
  /**
   * Returns the segment's position within a particular Period.
   * @return {number} The segment's position.
   */
  getPosition() {}
  /**
   * Returns the segment's start time in seconds, relative to
   * the start of a particular Period.
   * @return {number}
   */
  getStartTime() {}
  /**
   * Returns the segment's end time in seconds, relative to
   * the start of a particular Period.
   * @return {number}
   */
  getEndTime() {}
  /**
   * Creates the URIs of the resource containing the segment.
   * @return {!Array.<string>}
   */
  createUris() {}
  /**
   * Returns the offset from the start of the resource to the
   * start of the segment.
   * @return {number}
   */
  getStartByte() {}
  /**
   * Returns the offset from the start of the resource to the end of the
   * segment, inclusive.  A value of null indicates that the segment extends to
   * the end of the resource.
   * @return {?number}
   */
  getEndByte() {}
};
/**
  * @summary DataViewReader abstracts a DataView object.
  */
shaka.util.DataViewReader = class {
  /**
   * @param {!DataView} dataView The DataView.
   * @param {shaka.util.DataViewReader.Endianness} endianness The endianness.
   */
  constructor(dataView,endianness) {}
  /**
   * @return {boolean} True if the reader has more data, false otherwise.
   */
  hasMoreData() {}
  /**
   * Gets the current byte position.
   * @return {number}
   */
  getPosition() {}
  /**
   * Gets the byte length of the DataView.
   * @return {number}
   */
  getLength() {}
  /**
   * Reads an unsigned 8 bit integer, and advances the reader.
   * @return {number} The integer.
   * @throws {shaka.util.Error} when reading past the end of the data view.
   */
  readUint8() {}
  /**
   * Reads an unsigned 16 bit integer, and advances the reader.
   * @return {number} The integer.
   * @throws {shaka.util.Error} when reading past the end of the data view.
   */
  readUint16() {}
  /**
   * Reads an unsigned 32 bit integer, and advances the reader.
   * @return {number} The integer.
   * @throws {shaka.util.Error} when reading past the end of the data view.
   */
  readUint32() {}
  /**
   * Reads a signed 32 bit integer, and advances the reader.
   * @return {number} The integer.
   * @throws {shaka.util.Error} when reading past the end of the data view.
   */
  readInt32() {}
  /**
   * Reads an unsigned 64 bit integer, and advances the reader.
   * @return {number} The integer.
   * @throws {shaka.util.Error} when reading past the end of the data view or
   *   when reading an integer too large to store accurately in JavaScript.
   */
  readUint64() {}
  /**
   * Reads the specified number of raw bytes.
   * @param {number} bytes The number of bytes to read.
   * @return {!Uint8Array}
   * @throws {shaka.util.Error} when reading past the end of the data view.
   */
  readBytes(bytes) {}
  /**
   * Skips the specified number of bytes.
   * @param {number} bytes The number of bytes to skip.
   * @throws {shaka.util.Error} when skipping past the end of the data view.
   */
  skip(bytes) {}
  /**
   * Rewinds the specified number of bytes.
   * @param {number} bytes The number of bytes to rewind.
   * @throws {shaka.util.Error} when rewinding past the beginning of the data
   *   view.
   */
  rewind(bytes) {}
  /**
   * Seeks to a specified position.
   * @param {number} position The desired byte position within the DataView.
   * @throws {shaka.util.Error} when seeking outside the range of the data view.
   */
  seek(position) {}
  /**
   * Keeps reading until it reaches a byte that equals to zero.  The text is
   * assumed to be UTF-8.
   * @return {string}
   */
  readTerminatedString() {}
};
/**
 * Endianness.
 * @enum {number}
 */
shaka.util.DataViewReader.Endianness = {
  BIG_ENDIAN: 0,
  LITTLE_ENDIAN: 1
};
/**
 */
shaka.util.Mp4Parser = class {
  constructor() {}
  /**
   * Declare a box type as a Box.
   * @param {string} type
   * @param {!shaka.util.Mp4Parser.CallbackType} definition
   * @return {!shaka.util.Mp4Parser}
   */
  box(type,definition) {}
  /**
   * Declare a box type as a Full Box.
   * @param {string} type
   * @param {!shaka.util.Mp4Parser.CallbackType} definition
   * @return {!shaka.util.Mp4Parser}
   */
  fullBox(type,definition) {}
  /**
   * Stop parsing.  Useful for extracting information from partial segments and
   * avoiding an out-of-bounds error once you find what you are looking for.
   */
  stop() {}
  /**
   * Parse the given data using the added callbacks.
   * @param {!BufferSource} data
   * @param {boolean=} partialOkay If true, allow reading partial payloads
   *   from some boxes. If the goal is a child box, we can sometimes find it
   *   without enough data to find all child boxes.
   */
  parse(data,partialOkay) {}
  /**
   * Parse the next box on the current level.
   * @param {number} absStart The absolute start position in the original
   *   byte array.
   * @param {!shaka.util.DataViewReader} reader
   * @param {boolean=} partialOkay If true, allow reading partial payloads
   *   from some boxes. If the goal is a child box, we can sometimes find it
   *   without enough data to find all child boxes.
   */
  parseNext(absStart,reader,partialOkay) {}
  /**
   * A callback that tells the Mp4 parser to treat the body of a box as a series
   * of boxes. The number of boxes is limited by the size of the parent box.
   * @param {!shaka.extern.ParsedBox} box
   */
  static children(box) {}
  /**
   * A callback that tells the Mp4 parser to treat the body of a box as a sample
   * description. A sample description box has a fixed number of children. The
   * number of children is represented by a 4 byte unsigned integer. Each child
   * is a box.
   * @param {!shaka.extern.ParsedBox} box
   */
  static sampleDescription(box) {}
  /**
   * Create a callback that tells the Mp4 parser to treat the body of a box as a
   * binary blob and to parse the body's contents using the provided callback.
   * @param {function(!Uint8Array)} callback
   * @return {!shaka.util.Mp4Parser.CallbackType}
   */
  static allData(callback) {}
  /**
   * Convert an integer type from a box into an ascii string name.
   * Useful for debugging.
   * @param {number} type The type of the box, a uint32.
   * @return {string}
   */
  static typeToString(type) {}
};
/**
 * @typedef {function(!shaka.extern.ParsedBox)}
 */
shaka.util.Mp4Parser.CallbackType;
/**
 * SegmentIndex.
 * @implements {shaka.util.IDestroyable}
 */
shaka.media.SegmentIndex = class {
  /**
   * @param {!Array.<!shaka.media.SegmentReference>} references The list of
   *   SegmentReferences, which must be sorted first by their start times
   *   (ascending) and second by their end times (ascending).  They must have
   *   continuous, increasing positions.
   */
  constructor(references) {}
  /**
   * @override
   */
  destroy() {}
  /**
   * Finds the position of the segment for the given time, in seconds, relative
   * to the start of a particular Period.  Returns the position of the segment
   * with the largest end time if more than one segment is known for the given
   * time.
   * @param {number} time
   * @return {?number} The position of the segment, or null
   *   if the position of the segment could not be determined.
   */
  find(time) {}
  /**
   * Gets the SegmentReference for the segment at the given position.
   * @param {number} position The position of the segment.
   * @return {shaka.media.SegmentReference} The SegmentReference, or null if
   *   no such SegmentReference exists.
   */
  get(position) {}
  /**
   * Offset all segment references by a fixed amount.
   * @param {number} offset The amount to add to each segment's start and end
   *   times.
   */
  offset(offset) {}
  /**
   * Merges the given SegmentReferences.  Supports extending the original
   * references only.  Will not replace old references or interleave new ones.
   * @param {!Array.<!shaka.media.SegmentReference>} references The list of
   *   SegmentReferences, which must be sorted first by their start times
   *   (ascending) and second by their end times (ascending).  They must have
   *   continuous, increasing positions.
   */
  merge(references) {}
  /**
   * Removes all SegmentReferences that end before the given time.
   * @param {number} time The time in seconds.
   */
  evict(time) {}
};
/**
 * Registers a manifest parser by file extension.
 * @param {string} extension The file extension of the manifest.
 * @param {shaka.extern.ManifestParser.Factory} parserFactory The factory
 *   used to create parser instances.
 */
shaka.media.ManifestParser.registerParserByExtension = function(extension, parserFactory) {};
/**
 * Registers a manifest parser by MIME type.
 * @param {string} mimeType The MIME type of the manifest.
 * @param {shaka.extern.ManifestParser.Factory} parserFactory The factory
 *   used to create parser instances.
 */
shaka.media.ManifestParser.registerParserByMime = function(mimeType, parserFactory) {};
/**
 * PresentationTimeline.
 */
shaka.media.PresentationTimeline = class {
  /**
   * @param {?number} presentationStartTime The wall-clock time, in seconds,
   *   when the presentation started or will start. Only required for live.
   * @param {number} presentationDelay The delay to give the presentation, in
   *   seconds.  Only required for live.
   * @param {boolean=} autoCorrectDrift Whether to account for drift when
   *   determining the availability window.
   * @see {shaka.extern.Manifest}
   * @see {@tutorial architecture}
   */
  constructor(presentationStartTime,presentationDelay,autoCorrectDrift) {}
  /**
   * @return {number} The presentation's duration in seconds.
   *   Infinity indicates that the presentation continues indefinitely.
   */
  getDuration() {}
  /**
   * Sets the presentation's duration.
   * @param {number} duration The presentation's duration in seconds.
   *   Infinity indicates that the presentation continues indefinitely.
   */
  setDuration(duration) {}
  /**
   * @return {?number} The presentation's start time in seconds.
   */
  getPresentationStartTime() {}
  /**
   * Sets the clock offset, which is the difference between the client's clock
   * and the server's clock, in milliseconds (i.e., serverTime = Date.now() +
   * clockOffset).
   * @param {number} offset The clock offset, in ms.
   */
  setClockOffset(offset) {}
  /**
   * Sets the presentation's static flag.
   * @param {boolean} isStatic If true, the presentation is static, meaning all
   *   segments are available at once.
   */
  setStatic(isStatic) {}
  /**
   * Sets the presentation's segment availability duration. The segment
   * availability duration should only be set for live.
   * @param {number} segmentAvailabilityDuration The presentation's new segment
   *   availability duration in seconds.
   */
  setSegmentAvailabilityDuration(segmentAvailabilityDuration) {}
  /**
   * Sets the presentation delay in seconds.
   * @param {number} delay
   */
  setDelay(delay) {}
  /**
   * Gets the presentation delay in seconds.
   * @return {number}
   */
  getDelay() {}
  /**
   * Gives PresentationTimeline a Stream's segments so it can size and position
   * the segment availability window, and account for missing segment
   * information.  This function should be called once for each Stream (no more,
   * no less).
   * @param {!Array.<!shaka.media.SegmentReference>} references
   * @param {number} periodStart
   */
  notifySegments(references,periodStart) {}
  /**
   * Gives PresentationTimeline a Stream's minimum segment start time.
   * @param {number} startTime
   */
  notifyMinSegmentStartTime(startTime) {}
  /**
   * Gives PresentationTimeline a Stream's maximum segment duration so it can
   * size and position the segment availability window.  This function should be
   * called once for each Stream (no more, no less), but does not have to be
   * called if notifySegments() is called instead for a particular stream.
   * @param {number} maxSegmentDuration The maximum segment duration for a
   *   particular stream.
   */
  notifyMaxSegmentDuration(maxSegmentDuration) {}
  /**
   * Offsets the segment times by the given amount.
   * @param {number} offset The number of seconds to offset by.  A positive
   *   number adjusts the segment times forward.
   */
  offset(offset) {}
  /**
   * @return {boolean} True if the presentation is live; otherwise, return
   *   false.
   */
  isLive() {}
  /**
   * @return {boolean} True if the presentation is in progress (meaning not
   *   live, but also not completely available); otherwise, return false.
   */
  isInProgress() {}
  /**
   * Gets the presentation's current segment availability start time.  Segments
   * ending at or before this time should be assumed to be unavailable.
   * @return {number} The current segment availability start time, in seconds,
   *   relative to the start of the presentation.
   */
  getSegmentAvailabilityStart() {}
  /**
   * Sets the start time of the user-defined seek range.  This is only used for
   * VOD content.
   * @param {number} time
   */
  setUserSeekStart(time) {}
  /**
   * Gets the presentation's current segment availability end time.  Segments
   * starting after this time should be assumed to be unavailable.
   * @return {number} The current segment availability end time, in seconds,
   *   relative to the start of the presentation.  Always returns the
   *   presentation's duration for video-on-demand.
   */
  getSegmentAvailabilityEnd() {}
  /**
   * Gets the seek range start time, offset by the given amount.  This is used
   * to ensure that we don't "fall" back out of the seek window while we are
   * buffering.
   * @param {number} offset The offset to add to the start time.
   * @return {number} The current seek start time, in seconds, relative to the
   *   start of the presentation.
   */
  getSafeSeekRangeStart(offset) {}
  /**
   * Gets the seek range start time.
   * @return {number}
   */
  getSeekRangeStart() {}
  /**
   * Gets the seek range end.
   * @return {number}
   */
  getSeekRangeEnd() {}
  /**
   * True if the presentation start time is being used to calculate the live
   * edge.
   * Using the presentation start time means that the stream may be subject to
   * encoder drift.  At runtime, we will avoid using the presentation start time
   * whenever possible.
   * @return {boolean}
   */
  usingPresentationStartTime() {}
};
/**
 * Creates a new DASH parser.
 * @implements {shaka.extern.ManifestParser}
 */
shaka.dash.DashParser = class {
  /** Creates a new DASH parser. */
  constructor() {}
  /**
   * @override
   */
  configure(config) {}
  /**
   * @override
   */
  start(uri,playerInterface) {}
  /**
   * @override
   */
  stop() {}
  /**
   * @override
   */
  update() {}
  /**
   * @override
   */
  onExpirationUpdated(sessionId,expiration) {}
};
/**
 * @summary A networking plugin to handle data URIs.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs
 */
shaka.net.DataUriPlugin = class {
  /**
   * @param {string} uri
   * @param {shaka.extern.Request} request
   * @param {shaka.net.NetworkingEngine.RequestType} requestType
   * @param {shaka.extern.ProgressUpdated} progressUpdated Called when a
   *   progress event happened.
   * @return {!shaka.extern.IAbortableOperation.<shaka.extern.Response>}
   */
  static parse(uri,request,requestType,progressUpdated) {}
};
/**
 * HLS parser.
 * @implements {shaka.extern.ManifestParser}
 */
shaka.hls.HlsParser = class {
  /**
   * Creates an Hls Parser object.
   */
  constructor() {}
  /**
   * @override
   */
  configure(config) {}
  /**
   * @override
   */
  start(uri,playerInterface) {}
  /**
   * @override
   */
  stop() {}
  /**
   * @override
   */
  update() {}
  /**
   * @override
   */
  onExpirationUpdated(sessionId,expiration) {}
};
/**
 * @summary A networking plugin to handle http and https URIs via the Fetch API.
 */
shaka.net.HttpFetchPlugin = class {
  /**
   * Determine if the Fetch API is supported in the browser. Note: this is
   * deliberately exposed as a method to allow the client app to use the same
   * logic as Shaka when determining support.
   * @return {boolean}
   */
  static isSupported() {}
};
/**
 * @summary A networking plugin to handle http and https URIs via XHR.
 */
shaka.net.HttpXHRPlugin = class {
  /**
   * @param {string} uri
   * @param {shaka.extern.Request} request
   * @param {shaka.net.NetworkingEngine.RequestType} requestType
   * @param {shaka.extern.ProgressUpdated} progressUpdated Called when a
   *   progress event happened.
   * @return {!shaka.extern.IAbortableOperation.<shaka.extern.Response>}
   */
  static parse(uri,request,requestType,progressUpdated) {}
};
/**
 * @summary A plugin that handles requests for offline content.
 */
shaka.offline.OfflineScheme = class {
  /**
   * @param {string} uri
   * @param {shaka.extern.Request} request
   * @param {shaka.net.NetworkingEngine.RequestType} requestType
   * @param {shaka.extern.ProgressUpdated} progressUpdated Called when a
   *   progress event happened.
   * @return {!shaka.extern.IAbortableOperation.<shaka.extern.Response>}
   */
  static plugin(uri,request,requestType,progressUpdated) {}
};
/**
 * @summary
 * This defines the default text displayer plugin. An instance of this
 * class is used when no custom displayer is given.
 * This class simply converts shaka.text.Cue objects to
 * TextTrackCues and feeds them to the browser.
 * @implements {shaka.extern.TextDisplayer}
 */
shaka.text.SimpleTextDisplayer = class {
  /** @param {HTMLMediaElement} video */
  constructor(video) {}
  /**
   * @override
   */
  remove(start,end) {}
  /**
   * @override
   */
  append(cues) {}
  /**
   * @override
   */
  destroy() {}
  /**
   * @override
   */
  isTextVisible() {}
  /**
   * @override
   */
  setTextVisibility(on) {}
};
/**
 * @summary The main player object for Shaka Player.
 * @implements {shaka.util.IDestroyable}
 */
shaka.Player = class extends shaka.util.FakeEventTarget {
  /**
   * @param {HTMLMediaElement=} mediaElement
   *    When provided, the player will attach to |mediaElement|, similar to
   *    calling |attach|. When not provided, the player will remain detached.
   * @param {function(shaka.Player)=} dependencyInjector Optional callback
   *   which is called to inject mocks into the Player.  Used for testing.
   */
  constructor(mediaElement,dependencyInjector) {}
  /**
   * After destruction, a Player object cannot be used again.
   * @override
   */
  destroy() {}
  /**
   * Registers a plugin callback that will be called with support().  The
   * callback will return the value that will be stored in the return value from
   * support().
   * @param {string} name
   * @param {function():*} callback
   */
  static registerSupportPlugin(name,callback) {}
  /**
   * Return whether the browser provides basic support.  If this returns false,
   * Shaka Player cannot be used at all.  In this case, do not construct a
   * Player instance and do not use the library.
   * @return {boolean}
   */
  static isBrowserSupported() {}
  /**
   * Probes the browser to determine what features are supported.  This makes a
   * number of requests to EME/MSE/etc which may result in user prompts.  This
   * should only be used for diagnostics.
   * NOTE: This may show a request to the user for permission.
   * @see https://bit.ly/2ywccmH
   * @return {!Promise.<shaka.extern.SupportType>}
   */
  static probeSupport() {}
  /**
   * Tell the player to use |mediaElement| for all |load| requests until
   * |detach| or |destroy| are called.
   * Calling |attach| with |initializedMediaSource=true| will tell the player to
   * take the initial load step and initialize media source.
   * Calls to |attach| will interrupt any in-progress calls to |load| but cannot
   * interrupt calls to |attach|, |detach|, or |unload|.
   * @param {!HTMLMediaElement} mediaElement
   * @param {boolean=} initializeMediaSource
   * @return {!Promise}
   */
  attach(mediaElement,initializeMediaSource) {}
  /**
   * Tell the player to stop using its current media element. If the player is:
   *  - detached, this will do nothing,
   *  - attached, this will release the media element,
   *  - loading, this will abort loading, unload, and release the media element,
   *  - playing content, this will stop playback, unload, and release the media
   *    element.
   * Calls to |detach| will interrupt any in-progress calls to |load| but cannot
   * interrupt calls to |attach|, |detach|, or |unload|.
   * @return {!Promise}
   */
  detach() {}
  /**
   * Tell the player to either return to:
   *   - detached (when it does not have a media element),
   *   - attached (when it has a media element and
   *     |initializedMediaSource=false|)
   *   - media source initialized (when it has a media element and
   *     |initializedMediaSource=true|)
   * Calls to |unload| will interrupt any in-progress calls to |load| but cannot
   * interrupt calls to |attach|, |detach|, or |unload|.
   * @param {boolean=} initializeMediaSource
   * @return {!Promise}
   */
  unload(initializeMediaSource) {}
  /**
   * Tell the player to load the content at |assetUri| and start playback at
   * |startTime|. Before calling |load|, a call to |attach| must have succeeded.
   * Calls to |load| will interrupt any in-progress calls to |load| but cannot
   * interrupt calls to |attach|, |detach|, or |unload|.
   * @param {string} assetUri
   * @param {?number=} startTime
   *    When |startTime| is |null| or |undefined|, playback will start at the
   *    default start time (0 for VOD and liveEdge for LIVE).
   * @param {string|shaka.extern.ManifestParser.Factory=} mimeType
   * @return {!Promise}
   */
  load(assetUri,startTime,mimeType) {}
  /**
   * Configure the Player instance.
   * The config object passed in need not be complete.  It will be merged with
   * the existing Player configuration.
   * Config keys and types will be checked.  If any problems with the config
   * object are found, errors will be reported through logs and this returns
   * false.  If there are errors, valid config objects are still set.
   * @param {string|!Object} config This should either be a field name or an
   *   object following the form of {@link shaka.extern.PlayerConfiguration},
   *   where you may omit any field you do not wish to change.
   * @param {*=} value This should be provided if the previous parameter
   *   was a string field name.
   * @return {boolean} True if the passed config object was valid, false if
   *   there were invalid entries.
   */
  configure(config,value) {}
  /**
   * Return a copy of the current configuration.  Modifications of the returned
   * value will not affect the Player's active configuration.  You must call
   * player.configure() to make changes.
   * @return {shaka.extern.PlayerConfiguration}
   */
  getConfiguration() {}
  /**
   * Reset configuration to default.
   */
  resetConfiguration() {}
  /**
   * Get the current load mode.
   * @return {shaka.Player.LoadMode}
   */
  getLoadMode() {}
  /**
   * Get the media element that the player is currently using to play loaded
   * content. If the player has not loaded content, this will return |null|.
   * @return {HTMLMediaElement}
   */
  getMediaElement() {}
  /**
   * @return {shaka.net.NetworkingEngine} A reference to the Player's networking
   *     engine.  Applications may use this to make requests through Shaka's
   *     networking plugins.
   */
  getNetworkingEngine() {}
  /**
   * Get the uri to the asset that the player has loaded. If the player has not
   * loaded content, this will return |null|.
   * @return {?string}
   */
  getAssetUri() {}
  /**
   * Get the uri to the asset that the player has loaded. If the player has not
   * loaded content, this will return |null|.
   * @deprecated
   * @return {?string}
   */
  getManifestUri() {}
  /**
   * Get if the player is playing live content. If the player has not loaded
   * content, this will return |false|.
   * @return {boolean}
   */
  isLive() {}
  /**
   * Get if the player is playing in-progress content. If the player has not
   * loaded content, this will return |false|.
   * @return {boolean}
   */
  isInProgress() {}
  /**
   * Check if the manifest contains only audio-only content. If the player has
   * not loaded content, this will return |false|.
   * The player does not support content that contain more than one type of
   * variants (i.e. mixing audio-only, video-only, audio-video). Content will be
   * filtered to only contain one type of variant.
   * @return {boolean}
   */
  isAudioOnly() {}
  /**
   * Get the range of time (in seconds) that seeking is allowed. If the player
   * has not loaded content, this will return a range from 0 to 0.
   * @return {{start: number, end: number}}
   */
  seekRange() {}
  /**
   * Get the key system currently used by EME. If EME is not being used, this
   * will return an empty string. If the player has not loaded content, this
   * will return an empty string.
   * @return {string}
   */
  keySystem() {}
  /**
   * Get the drm info used to initialize EME. If EME is not being used, this
   * will return |null|. If the player is idle or has not initialized EME yet,
   * this will return |null|.
   * @return {?shaka.extern.DrmInfo}
   */
  drmInfo() {}
  /**
   * Get the next known expiration time for any EME session. If the session
   * never expires, this will return |Infinity|. If there are no EME sessions,
   * this will return |Infinity|. If the player has not loaded content, this
   * will return |Infinity|.
   * @return {number}
   */
  getExpiration() {}
  /**
   * Check if the player is currently in a buffering state (has too little
   * content to play smoothly). If the player has not loaded content, this will
   * return |false|.
   * @return {boolean}
   */
  isBuffering() {}
  /**
   * Get the playback rate of what is playing right now. If we are using trick
   * play, this will return the trick play rate. If no content is playing, this
   * will return 0. If content is buffering, this will return 0.
   * If the player has not loaded content, this will return a playback rate of
   * |0|.
   * @return {number}
   */
  getPlaybackRate() {}
  /**
   * Enable trick play to skip through content without playing by repeatedly
   * seeking. For example, a rate of 2.5 would result in 2.5 seconds of content
   * being skipped every second. A negative rate will result in moving
   * backwards.
   * If the player has not loaded content or is still loading content this will
   * be a no-op. Wait until |load| has completed before calling.
   * Trick play will be canceled automatically if the playhead hits the
   * beginning or end of the seekable range for the content.
   * @param {number} rate
   */
  trickPlay(rate) {}
  /**
   * Cancel trick-play. If the player has not loaded content or is still loading
   * content this will be a no-op.
   */
  cancelTrickPlay() {}
  /**
   * Return a list of variant tracks that can be switched to in the current
   * period. If there are multiple periods, you must seek to the period in order
   * to get variants from that period.
   * If the player has not loaded content, this will return an empty list.
   * @return {!Array.<shaka.extern.Track>}
   */
  getVariantTracks() {}
  /**
   * Return a list of text tracks that can be switched to in the current period.
   * If there are multiple periods, you must seek to a period in order to get
   * text tracks from that period.
   * If the player has not loaded content, this will return an empty list.
   * @return {!Array.<shaka.extern.Track>}
   */
  getTextTracks() {}
  /**
   * Select a specific text track from the current period. |track| should come
   * from a call to |getTextTracks|. If the track is not found in the current
   * period, this will be a no-op. If the player has not loaded content, this
   * will be a no-op.
   * Note that AdaptationEvents are not fired for manual track selections.
   * @param {shaka.extern.Track} track
   */
  selectTextTrack(track) {}
  /**
   * Find the CEA 608/708 text stream embedded in video, and switch to it.
   * @deprecated
   */
  selectEmbeddedTextTrack() {}
  /**
   * @return {boolean} True if we are using any embedded text tracks present.
   * @deprecated
   */
  usingEmbeddedTextTrack() {}
  /**
   * Select a specific variant track to play from the current period. |track|
   * should come from a call to |getVariantTracks|. If |track| cannot be found
   * in the current variant, this will be a no-op. If the player has not loaded
   * content, this will be a no-op.
   * Changing variants will take effect once the currently buffered content has
   * been played. To force the change to happen sooner, use |clearBuffer| with
   * |safeMargin|. Setting |clearBuffer| to |true| will clear all buffered
   * content after |safeMargin|, allowing the new variant to start playing
   * sooner.
   * Note that AdaptationEvents are not fired for manual track selections.
   * @param {shaka.extern.Track} track
   * @param {boolean=} clearBuffer
   * @param {number=} safeMargin Optional amount of buffer (in seconds) to
   *   retain when clearing the buffer. Useful for switching variant quickly
   *   without causing a buffering event. Defaults to 0 if not provided. Ignored
   *   if clearBuffer is false. Can cause hiccups on some browsers if chosen too
   *   small, e.g. The amount of two segments is a fair minimum to consider as
   *   safeMargin value.
   */
  selectVariantTrack(track,clearBuffer,safeMargin) {}
  /**
   * Return a list of audio language-role combinations available for the current
   * period. If the player has not loaded any content, this will return an empty
   * list.
   * @return {!Array.<shaka.extern.LanguageRole>}
   */
  getAudioLanguagesAndRoles() {}
  /**
   * Return a list of text language-role combinations available for the current
   * period. If the player has not loaded any content, this will be return an
   * empty list.
   * @return {!Array.<shaka.extern.LanguageRole>}
   */
  getTextLanguagesAndRoles() {}
  /**
   * Return a list of audio languages available for the current period. If the
   * player has not loaded any content, this will return an empty list.
   * @return {!Array.<string>}
   */
  getAudioLanguages() {}
  /**
   * Return a list of text languages available for the current period. If the
   * player has not loaded any content, this will return an empty list.
   * @return {!Array.<string>}
   */
  getTextLanguages() {}
  /**
   * Sets currentAudioLanguage and currentVariantRole to the selected language
   * and role, and chooses a new variant if need be. If the player has not
   * loaded any content, this will be a no-op.
   * @param {string} language
   * @param {string=} role
   */
  selectAudioLanguage(language,role) {}
  /**
   * Sets currentTextLanguage and currentTextRole to the selected language and
   * role, and chooses a new variant if need be. If the player has not loaded
   * any content, this will be a no-op.
   * @param {string} language
   * @param {string=} role
   */
  selectTextLanguage(language,role) {}
  /**
   * Check if the text displayer is enabled.
   * @return {boolean}
   */
  isTextTrackVisible() {}
  /**
   * Enable or disable the text displayer.  If the player is in an unloaded
   * state, the request will be applied next time content is loaded.
   * @param {boolean} isVisible
   * @return {!Promise}
   */
  setTextTrackVisibility(isVisible) {}
  /**
   * Get the current playhead position as a date. This should only be called
   * when the player has loaded a live stream. If the player has not loaded a
   * live stream, this will return |null|.
   * @return {Date}
   */
  getPlayheadTimeAsDate() {}
  /**
   * Get the presentation start time as a date. This should only be called when
   * the player has loaded a live stream. If the player has not loaded a live
   * stream, this will return |null|.
   * @return {Date}
   */
  getPresentationStartTimeAsDate() {}
  /**
   * Get information about what the player has buffered. If the player has not
   * loaded content or is currently loading content, the buffered content will
   * be empty.
   * @return {shaka.extern.BufferedInfo}
   */
  getBufferedInfo() {}
  /**
   * Get statistics for the current playback session. If the player is not
   * playing content, this will return an empty stats object.
   * @return {shaka.extern.Stats}
   */
  getStats() {}
  /**
   * Adds the given text track to the current Period.  load() must resolve
   * before calling.  The current Period or the presentation must have a
   * duration.
   * This returns a Promise that will resolve with the track that was created,
   * when that track can be switched to.
   * @param {string} uri
   * @param {string} language
   * @param {string} kind
   * @param {string} mime
   * @param {string=} codec
   * @param {string=} label
   * @return {!Promise.<shaka.extern.Track>}
   */
  addTextTrack(uri,language,kind,mime,codec,label) {}
  /**
   * Set the maximum resolution that the platform's hardware can handle.
   * This will be called automatically by shaka.cast.CastReceiver to enforce
   * limitations of the Chromecast hardware.
   * @param {number} width
   * @param {number} height
   */
  setMaxHardwareResolution(width,height) {}
  /**
   * Retry streaming after a streaming failure has occurred. When the player has
   * not loaded content or is loading content, this will be a no-op and will
   * return |false|.
   * If the player has loaded content, and streaming has not seen an error, this
   * will return |false|.
   * if the player has loaded content, and streaming seen an error, but the
   * could not resume streaming, this will return |false|.
   * @return {boolean}
   */
  retryStreaming() {}
  /**
   * Get the manifest that the player has loaded. If the player has not loaded
   * any content, this will return |null|.
   * @return {?shaka.extern.Manifest}
   */
  getManifest() {}
  /**
   * Get the type of manifest parser that the player is using. If the player has
   * not loaded any content, this will return |null|.
   * @return {?shaka.extern.ManifestParser.Factory}
   */
  getManifestParserFactory() {}
};
/**
 * In order to know what method of loading the player used for some content, we
 * have this enum. It lets us know if content has not been loaded, loaded with
 * media source, or loaded with src equals.
 * This enum has a low resolution, because it is only meant to express the
 * outer limits of the various states that the player is in. For example, when
 * someone calls a public method on player, it should not matter if they have
 * initialized drm engine, it should only matter if they finished loading
 * content.
 * @enum {number}
 */
shaka.Player.LoadMode = {
  'DESTROYED': 0,
  'NOT_LOADED': 1,
  'MEDIA_SOURCE': 2,
  'SRC_EQUALS': 3
};
/**
 * @define {string} A version number taken from git at compile time.
 */
shaka.Player.version;
/**
 * @summary
 * This manages persistent offline data including storage, listing, and deleting
 * stored manifests.  Playback of offline manifests are done through the Player
 * using a special URI (see shaka.offline.OfflineUri).
 * First, check support() to see if offline is supported by the platform.
 * Second, configure() the storage object with callbacks to your application.
 * Third, call store(), remove(), or list() as needed.
 * When done, call destroy().
 * @implements {shaka.util.IDestroyable}
 */
shaka.offline.Storage = class {
  /**
   * @param {!shaka.Player=} player
   *    A player instance to share a networking engine and configuration with.
   *    When initializing with a player, storage is only valid as long as
   *    |destroy| has not been called on the player instance. When omitted,
   *    storage will manage its own networking engine and configuration.
   */
  constructor(player) {}
  /**
   * Gets whether offline storage is supported.  Returns true if offline storage
   * is supported for clear content.  Support for offline storage of encrypted
   * content will not be determined until storage is attempted.
   * @return {boolean}
   */
  static support() {}
  /**
   * @override
   */
  destroy() {}
  /**
   * Sets configuration values for Storage.  This is associated with
   * Player.configure and will change the player instance given at
   * initialization.
   * @param {string|!Object} config This should either be a field name or an
   *   object following the form of {@link shaka.extern.PlayerConfiguration},
   *   where you may omit any field you do not wish to change.
   * @param {*=} value This should be provided if the previous parameter
   *   was a string field name.
   * @return {boolean}
   */
  configure(config,value) {}
  /**
   * Return a copy of the current configuration.  Modifications of the returned
   * value will not affect the Storage instance's active configuration.  You
   * must call storage.configure() to make changes.
   * @return {shaka.extern.PlayerConfiguration}
   */
  getConfiguration() {}
  /**
   * Return the networking engine that storage is using. If storage was
   * initialized with a player instance, then the networking engine returned
   * will be the same as |player.getNetworkingEngine()|.
   * The returned value will only be null if |destroy| was called before
   * |getNetworkingEngine|.
   * @return {shaka.net.NetworkingEngine}
   */
  getNetworkingEngine() {}
  /**
   * Stores the given manifest.  If the content is encrypted, and encrypted
   * content cannot be stored on this platform, the Promise will be rejected
   * with error code 6001, REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE.
   * @param {string} uri The URI of the manifest to store.
   * @param {!Object=} appMetadata An arbitrary object from the application
   *   that will be stored along-side the offline content.  Use this for any
   *   application-specific metadata you need associated with the stored
   *   content.  For details on the data types that can be stored here, please
   *   refer to {@link https://bit.ly/StructClone}
   * @param {string|shaka.extern.ManifestParser.Factory=} mimeType
   *   The mime type for the content |manifestUri| points to or a manifest
   *   parser factory to override auto-detection or use an unregistered parser.
   *   Passing a manifest parser factory is deprecated and will be removed.
   * @return {!Promise.<shaka.extern.StoredContent>}  A Promise to a structure
   *   representing what was stored.  The "offlineUri" member is the URI that
   *   should be given to Player.load() to play this piece of content offline.
   *   The "appMetadata" member is the appMetadata argument you passed to
   *   store().
   */
  store(uri,appMetadata,mimeType) {}
  /**
   * Returns true if an asset is currently downloading.
   * @return {boolean}
   */
  getStoreInProgress() {}
  /**
   * Removes the given stored content.  This will also attempt to release the
   * licenses, if any.
   * @param {string} contentUri
   * @return {!Promise}
   */
  remove(contentUri) {}
  /**
   * Removes any EME sessions that were not successfully removed before.  This
   * returns whether all the sessions were successfully removed.
   * @return {!Promise.<boolean>}
   */
  removeEmeSessions() {}
  /**
   * Lists all the stored content available.
   * @return {!Promise.<!Array.<shaka.extern.StoredContent>>}  A Promise to an
   *   array of structures representing all stored content.  The "offlineUri"
   *   member of the structure is the URI that should be given to Player.load()
   *   to play this piece of content offline.  The "appMetadata" member is the
   *   appMetadata argument you passed to store().
   */
  list() {}
  /**
   * Delete the on-disk storage and all the content it contains. This should not
   * be done in normal circumstances. Only do it when storage is rendered
   * unusable, such as by a version mismatch. No business logic will be run, and
   * licenses will not be released.
   * @return {!Promise}
   */
  static deleteAll() {}
};
/**
 */
shaka.util.Dom = class {
  /**
   * Remove all of the child nodes of an element.
   * @param {!Element} element
   */
  static removeAllChildren(element) {}
};
/**
 * @implements {shaka.extern.IUIElement}
 * @abstract
 */
shaka.ui.Element = class {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
  /**
   * @override
   */
  destroy() {}
};
/**
 * A container for custom video controls.
 * @implements {shaka.util.IDestroyable}
 */
shaka.ui.Controls = class extends shaka.util.FakeEventTarget {
  /**
   * @param {!shaka.Player} player
   * @param {!HTMLElement} videoContainer
   * @param {!HTMLMediaElement} video
   * @param {shaka.extern.UIConfiguration} config
   */
  constructor(player,videoContainer,video,config) {}
  /**
   * @override
   */
  destroy() {}
  /**
   * @param {string} name
   * @param {!shaka.extern.IUIElement.Factory} factory
   */
  static registerElement(name,factory) {}
  /**
   * This allows the application to inhibit casting.
   * @param {boolean} allow
   */
  allowCast(allow) {}
  /**
   * Used by the application to notify the controls that a load operation is
   * complete.  This allows the controls to recalculate play/paused state, which
   * is important for platforms like Android where autoplay is disabled.
   */
  loadComplete() {}
  /**
   * @param {!shaka.extern.UIConfiguration} config
   */
  configure(config) {}
  /**
  /**
   * Enable or disable the custom controls. Enabling disables native
   * browser controls.
   * @param {boolean} enabled
   */
  setEnabledShakaControls(enabled) {}
  /**
   * Enable or disable native browser controls. Enabling disables shaka
   * controls.
   * @param {boolean} enabled
   */
  setEnabledNativeControls(enabled) {}
  /**
   * @return {shaka.cast.CastProxy}
   */
  getCastProxy() {}
  /**
   * @return {shaka.ui.Localization}
   */
  getLocalization() {}
  /**
   * @return {!HTMLElement}
   */
  getVideoContainer() {}
  /**
   * @return {HTMLMediaElement}
   */
  getVideo() {}
  /**
   * @return {HTMLMediaElement}
   */
  getLocalVideo() {}
  /**
   * @return {shaka.Player}
   */
  getPlayer() {}
  /**
   * @return {shaka.Player}
   */
  getLocalPlayer() {}
  /**
   * @return {!HTMLElement}
   */
  getControlsContainer() {}
  /**
   * @return {!shaka.extern.UIConfiguration}
   */
  getConfig() {}
  /**
   * @return {boolean}
   */
  isSeeking() {}
  /**
   * @return {boolean}
   */
  isCastAllowed() {}
  /**
   * @return {number}
   */
  getDisplayTime() {}
  /**
   * @param {?number} time
   */
  setLastTouchEventTime(time) {}
  /**
   * Display controls even if css says overwise.
   * Normally, controls opacity is controled by CSS, but there are
   * a few special cases where we want controls to be displayed no
   * matter what. For example, if the focus is on one of the settings
   * menus. This method is called when we want to signal an exception
   * to normal CSS opacity rules and keep the controls visible.
   */
  overrideCssShowControls() {}
  /**
   * @return {boolean}
   */
  anySettingsMenusAreOpen() {}
  /**
   */
  hideSettingsMenus() {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.OverflowMenu = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
  /**
   * @param {string} name
   * @param {!shaka.extern.IUIElement.Factory} factory
   */
  static registerElement(name,factory) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.AudioLanguageSelection = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.CastButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.FastForwardButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.FullscreenButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.MuteButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.PipButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.PlayPauseButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.PresentationTimeTracker = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.ResolutionSelection = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.RewindButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.Spacer = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @implements {shaka.extern.TextDisplayer}
 * @final
 */
shaka.ui.TextDisplayer = class {
  /**
   * Constructor.
   * @param {HTMLMediaElement} video
   * @param {HTMLElement} videoContainer
   */
  constructor(video,videoContainer) {}
  /**
   * @override
   */
  append(cues) {}
  /**
   * @override
   */
  destroy() {}
  /**
   * @override
   */
  remove(start,end) {}
  /**
   * @override
   */
  isTextVisible() {}
  /**
   * @override
   */
  setTextVisibility(on) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.TextSelection = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
/**
 * @implements {shaka.util.IDestroyable}
 */
shaka.ui.Overlay = class {
  /**
   * @param {!shaka.Player} player
   * @param {!HTMLElement} videoContainer
   * @param {!HTMLMediaElement} video
   */
  constructor(player,videoContainer,video) {}
  /**
   * @override
   */
  destroy() {}
  /**
   * Detects if this is a mobile platform, in case you want to choose a
   * different UI configuration on mobile devices.
   * @return {boolean}
   */
  isMobile() {}
  /**
   * @return {!shaka.extern.UIConfiguration}
   */
  getConfiguration() {}
  /**
   * @param {string|!Object} config This should either be a field name or an
   *   object following the form of {@link shaka.extern.UIConfiguration}, where
   *   you may omit any field you do not wish to change.
   * @param {*=} value This should be provided if the previous parameter
   *   was a string field name.
   */
  configure(config,value) {}
  /**
   * @return {shaka.Player}
   * @deprecated Use getControls().getPlayer() instead.
   */
  getPlayer() {}
  /**
   * @return {shaka.ui.Controls}
   */
  getControls() {}
  /**
   * Enable or disable the custom controls.
   * @param {boolean} enabled
   */
  setEnabled(enabled) {}
};
/**
 * @extends {shaka.ui.Element}
 * @final
 */
shaka.ui.VolumeBar = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent,controls) {}
};
