package com.studywithme.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GroupMember {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int groupMemberId;
	
	private int groupMemberGroupId;
	private String groupMemberUserNickname;
	private boolean groupMemberIsMaster;
	private boolean groupMemberIsStudying;
}
