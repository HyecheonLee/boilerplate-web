package com.hyecheon.backend.core.util

import org.springframework.web.multipart.*

/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
const val UPLOAD_PATH = "upload"

fun MultipartFile.extension() = run {
	this.originalFilename?.split(".")?.last()
}